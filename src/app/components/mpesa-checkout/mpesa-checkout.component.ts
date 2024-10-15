import { Component,Input } from '@angular/core';

@Component({
  selector: 'mpesa-checkout',
  templateUrl: './mpesa-checkout.component.html',
  styleUrl: './mpesa-checkout.component.css'
})
export class MpesaCheckoutComponent {
@Input() total?:string
phoneNumber:string = ""

}
