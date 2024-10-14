import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store"
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
sliderImage:string[] = ["../../../assets/apple-ecosystem-web-banner_1_.webp","../../../assets/hp-web-banner_1.webp","../../../assets/pixels-carousel.webp"]
constructor(private store:Store<{"cart":string}>,private route:Router){}
cartLength:number = 0
go_cart(){
this.route.navigate(["/cart"])
}
ngOnInit(){
this.store.subscribe((state)=>{
var {cart} = state
this.cartLength = cart.length;
})
}



}    
