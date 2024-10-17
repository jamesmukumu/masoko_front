import { Component,Input,inject } from '@angular/core';
import { PayService } from '../../services/pay.service';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from '../loader/loader.component';
import Cookies from "js-cookie"
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'mpesa-checkout',
  templateUrl: './mpesa-checkout.component.html',
  styleUrl: './mpesa-checkout.component.css'
})
export class MpesaCheckoutComponent {
@Input() total?:string
phoneNumber:string = ""
readonly dialog = inject(MatDialog)
readonly snack = inject(MatSnackBar)
constructor(private pay:PayService){}
async initatePay(){
this.dialog.open(LoaderComponent)
var tt = this.total ?? ""
tt = tt.replace(",","")
var {message,url,token} = await this.pay.initatePay(tt)
if(message == "Payment initiated"){
var count = 0
Cookies.set("payment",token)
window.open(url,"_blank")
var interval = setInterval(()=>{
count += 1
if(count >= 3){
  clearInterval(interval)
}
this.pay.validatePay().then((data)=>{
 var {message} = data 
if(message == "Payment has expired" || message == 'Payment could not be completed' && count >= 3){
this.dialog.open(SuccessComponent)
clearInterval(interval)
}else if(message  == "Payment completed as needed" && count >= 3){
this.snack.open(message,"payment accepted")
clearInterval(interval)
}  
})
},10000)

}




}

}
