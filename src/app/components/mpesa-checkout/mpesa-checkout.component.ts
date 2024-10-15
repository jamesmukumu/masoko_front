import { Component,Input } from '@angular/core';
import { PayService } from '../../services/pay.service';


@Component({
  selector: 'mpesa-checkout',
  templateUrl: './mpesa-checkout.component.html',
  styleUrl: './mpesa-checkout.component.css'
})
export class MpesaCheckoutComponent {
@Input() total?:string
phoneNumber:string = ""

constructor(private pay:PayService){}
initatePay(){
  var tt = this.total ?? ""
  tt = tt.replace(",","")
this.pay.initatePay(tt)
}

}
