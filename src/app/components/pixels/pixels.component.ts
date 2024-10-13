import { Component,OnInit,inject } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store"
import { MatSnackBar } from '@angular/material/snack-bar';
import { savetoCart } from '../../redux/actions/action.add-cart';


@Component({
  selector: 'pixels',
  templateUrl: './pixels.component.html',
  styleUrl: './pixels.component.css'
})
export class PixelsComponent {
pixelPhones:any[] = []
readonly snack =  inject(MatSnackBar)
constructor(private pixels:PixelsService,private routing:Router,private store:Store<{"cart":string}>){}

priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}


Save_To_Cart(phoneSlug:string){
  this.store.dispatch(savetoCart({items:phoneSlug}))
  this.store.subscribe((state)=>console.log(state))
  this.snack.open("Google Pixels phone added to cart","cart",{
  verticalPosition:"top",
  horizontalPosition:"right"
  })
}

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 7750
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

discountCalc(originalPrice:string,newPrice:string){
var original = +originalPrice
var newprice = +newPrice
return  ((original - newprice)/original * 100).toFixed(2)
}

Navigator(urlPath:String){
  urlPath = urlPath.replace("/","")
  this.routing.navigate([`/desired/device/${urlPath}`])
  }
      
  
ngOnInit(){
this.pixels.Fetch_Phone_Brands("google").then((data)=>{
this.pixelPhones = data.phonesFetched
}).catch((err)=>console.log(err))
}


}
