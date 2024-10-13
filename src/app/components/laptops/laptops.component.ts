import { Component,OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopsService } from '../../services/laptops.service';
import {Store} from "@ngrx/store"
import {Observable} from "rxjs"
import { savetoCart } from '../../redux/actions/action.add-cart';
import {MatSnackBar} from "@angular/material/snack-bar"


@Component({
  selector: 'laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent implements OnInit{
laptops:any[] = []
count?:number
readonly snack = inject(MatSnackBar)

priceFormatter(PriceString:string):string{
return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

FoolsPrice(actualPrice:string){
var exaggeratedPrice = +actualPrice - 20500
var clientPrice = exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
return clientPrice
}
Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
}
Save_To_Cart(phoneSlug:string){
  this.store.dispatch(savetoCart({items:phoneSlug}))
  this.store.subscribe((state)=>console.log(state))
  this.snack.open("Laptop added to cart","cart",{
  verticalPosition:"top",
  horizontalPosition:"right"
  })
  }
  
    


constructor(private hp:LaptopsService,private routing:Router,private store:Store<{"cart":string}>){}
  ngOnInit(){
    this.hp.Fetch_Laptops().then((data)=>{
      this.laptops = data.data
      this.count = data.count
    }).catch((err)=>console.log(err))
  }
}
