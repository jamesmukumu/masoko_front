import { Component,OnInit } from '@angular/core';
import {Observable} from "rxjs"
import {Store} from "@ngrx/store"
import { Router } from '@angular/router';

@Component({
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
//
export class BottomNavComponent implements OnInit{
devicesAddectToCart?:Observable<any>
constructor(private store:Store<{"cart":string}>,private route:Router){}
cartLength:number = 0

go_cart(){
this.route.navigate(["/cart"])
}
ngOnInit(){
this.store.subscribe((state)=>{
console.log(state)
var {cart} = state
this.cartLength = cart.length
console.log("cart length",this.cartLength)
})
}


}
