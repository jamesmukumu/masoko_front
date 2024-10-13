import { Component,OnInit,inject } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store"
import {Observable} from "rxjs"
import { savetoCart } from '../../redux/actions/action.add-cart';
import {MatSnackBar} from "@angular/material/snack-bar"



@Component({
  selector: 'iphone',
  templateUrl: './iphone.component.html',
  styleUrl: './iphone.component.css'
})
export class IphoneComponent implements OnInit {
iphones:any[] = []
iphonesToAddtoCart?:Observable<any>
readonly snack = inject(MatSnackBar)

constructor(private iphone:PixelsService,private routing:Router,private store:Store<{"cart":string}>){
this.iphonesToAddtoCart =  this.store.select("cart")
}
Save_To_Cart(phoneSlug:string){
this.store.dispatch(savetoCart({items:phoneSlug}))
this.store.subscribe((state)=>console.log(state))
this.snack.open("Device added to cart","cart",{
verticalPosition:"top",
horizontalPosition:"right"
})
}

priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
  }
  
  priceChanger(PhonePrice:string):string{
  var exaggeratedPrice = +PhonePrice - 11350
  return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
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
  this.iphone.Fetch_Phone_Brands("iphone").then((data)=>{
  this.iphones = data.phonesFetched
  }).catch((err)=>console.log(err))
  }

}
