import { Component,OnInit,inject } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { savetoCart } from '../../redux/actions/action.add-cart';
import {Store} from "@ngrx/store"


@Component({
  selector: 'samsung',
  templateUrl: './samsung.component.html',
  styleUrl: './samsung.component.css'
})
export class SamsungComponent implements OnInit {
samsungPhone:any[] = []
constructor(private phone:PixelsService,private routing:Router,private store:Store<{"cart":string}>){}
readonly snack = inject(MatSnackBar)
Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
}
cart(deviceSlug:string){
  this.Save_To_Cart(deviceSlug)
  this.routing.navigate(["/cart"])
  }

Save_To_Cart(phoneSlug:string){
  this.store.dispatch(savetoCart({items:phoneSlug}))
  this.store.subscribe((state)=>console.log(state))
  this.snack.open("Vivo phone added to cart","cart",{
  verticalPosition:"top",
  horizontalPosition:"right"
  })
}
  

priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 3350
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

discountCalc(originalPrice:string,newPrice:string){
var original = +originalPrice
var newprice = +newPrice
return  ((original - newprice)/original * 100).toFixed(2)
}

ngOnInit(){
this.phone.Fetch_Phone_Brands("vivo").then((data)=>{
this.samsungPhone = data.phonesFetched
}).catch((err)=>console.log(err))
}
}
