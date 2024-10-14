import { Component,OnInit,ChangeDetectorRef,inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SingularDeviceService } from '../../services/singular-device.service';
import { delete_Cart } from '../../redux/actions/action.delete-cart';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
readonly snack = inject(MatSnackBar)
defaultQuantity:number = 1
phoneSlugs:string[] = []
finalProducts:any[] = []
totalPrice:number= 0
totalPriceString?:string
grandTotal?:string
constructor(private dector:ChangeDetectorRef,private store:Store<{"cart":string}>,private device:SingularDeviceService){}
priceFormatter(PriceString:string):string{
return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

increaseQuantity(){
this.defaultQuantity += 1
}

calculatorEachPrice(price:string):string{
var newPrice = +price
newPrice = newPrice * this.defaultQuantity
return newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

Remove_Cart(device_UrlPath:string){
this.store.dispatch(
delete_Cart({item:device_UrlPath})
)
this.Fetch_Update_Items()
this.snack.open("Device removed from cart","Removed",{
horizontalPosition:"right",
verticalPosition:"top"
})
}



Fetch_Update_Items(){
  this.finalProducts = []
  this.grandTotal = ""
  this.totalPriceString = ""
  this.totalPrice = 0
  this.store.subscribe((state)=>{
    this.phoneSlugs = state.cart as unknown as string[]
    })
    for(let i = 0; i < this.phoneSlugs.length;i++){
      this.device.Fetch_Singular_Device(this.phoneSlugs[i]).then((data)=>{
      this.finalProducts.push(data.data)
      var price  = +data.data.price
      this.totalPrice += price
      var totals = this.totalPrice + 150
      this.grandTotal = totals.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
     this.totalPriceString = this.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
    this.dector.detectChanges()
    }).catch((err)=>console.log(err))
      }
      
}

ngOnInit(){
this.Fetch_Update_Items()
}
}
