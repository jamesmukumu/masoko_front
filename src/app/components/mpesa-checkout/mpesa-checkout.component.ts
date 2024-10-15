import { Component,Input,inject } from '@angular/core';
import { PayService } from '../../services/pay.service';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'mpesa-checkout',
  templateUrl: './mpesa-checkout.component.html',
  styleUrl: './mpesa-checkout.component.css'
})
export class MpesaCheckoutComponent {
@Input() total?:string
phoneNumber:string = ""
readonly dialog = inject(MatDialog)
constructor(private pay:PayService){}
async initatePay(){
this.dialog.open(LoaderComponent)
var tt = this.total ?? ""
tt = tt.replace(",","")
var {message,url} = await this.pay.initatePay(tt)
if(message == "Payment initiated"){
window.location.href = url
}

}

}
