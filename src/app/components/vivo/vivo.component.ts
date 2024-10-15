import { Component,OnInit,inject } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';
import { savetoCart } from '../../redux/actions/action.add-cart';
import {Store} from "@ngrx/store"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vivo',
  templateUrl: './vivo.component.html',
  styleUrl: './vivo.component.css'
})
export class VivoComponent implements OnInit{
vivoPhones:any[] = []
readonly snack  = inject(MatSnackBar) 
constructor(private phone:PixelsService,private routing:Router,private store:Store<{"cart":string}>){}
Save_To_Cart(phoneSlug:string){
  this.store.dispatch(savetoCart({items:phoneSlug}))
  this.store.subscribe((state)=>console.log(state))
  this.snack.open("Samsung phone added to cart","cart",{
  verticalPosition:"top",
  horizontalPosition:"right"
  })
}

cart(deviceSlug:string){
  this.Save_To_Cart(deviceSlug)
  this.routing.navigate(["/cart"])
  }
priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}
Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
}

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 4350
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

discountCalc(originalPrice:string,newPrice:string){
var original = +originalPrice
var newprice = +newPrice
return  ((original - newprice)/original * 100).toFixed(2)
}

ngOnInit(){
this.phone.Fetch_Phone_Brands("samsung").then((data)=>{
this.vivoPhones = data.phonesFetched
}).catch((err)=>console.log(err))
}
}
