import { Component,OnInit,inject } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router'
import {Store} from "@ngrx/store"
import { MatSnackBar } from '@angular/material/snack-bar';
import { savetoCart } from '../../redux/actions/action.add-cart';


@Component({
  selector: 'one-plus',
  templateUrl: './one-plus.component.html',
  styleUrl: './one-plus.component.css'
})
export class OnePlusComponent {
onePlus:any[] = []
readonly snack= inject(MatSnackBar)
constructor(private oneplus:PixelsService,private routing:Router,private store:Store<{"cart":string}>){}
priceFormatter(PriceString:string):string{
return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}
cart(deviceSlug:string){
  this.Save_To_Cart(deviceSlug)
  this.routing.navigate(["/cart"])
  }
  
priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 11350
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}
Save_To_Cart(phoneSlug:string){
  this.store.dispatch(savetoCart({items:phoneSlug}))
  this.store.subscribe((state)=>console.log(state))
  this.snack.open("One Plus phone added to cart","cart",{
  verticalPosition:"top",
  horizontalPosition:"right"
  })
  }




Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
  }
  
  discountCalc(originalPrice:string,newPrice:string){
  var original = +originalPrice
  var newprice = +newPrice
  return  ((original - newprice)/original * 100).toFixed(2)
  }


  
  ngOnInit(){
  this.oneplus.Fetch_Phone_Brands("oneplus").then((data)=>{
  this.onePlus = data.phonesFetched
  }).catch((err)=>console.log(err))
  }

}
