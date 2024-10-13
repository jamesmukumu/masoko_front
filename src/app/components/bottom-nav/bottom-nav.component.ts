import { Component,OnInit } from '@angular/core';
import {Observable} from "rxjs"
import {Store} from "@ngrx/store"


@Component({
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
//
export class BottomNavComponent implements OnInit{
devicesAddectToCart?:Observable<any>
constructor(private store:Store<{"cart":string}>){}
cartLength:number = 0

ngOnInit(){
this.store.subscribe((state)=>{
console.log(state)
var {cart} = state
this.cartLength = cart.length
console.log("cart length",this.cartLength)
})
}


}
