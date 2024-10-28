import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store"
import { Router } from '@angular/router';
import {MatTableDataSource} from "@angular/material/table"
import { SingularDeviceService } from '../../services/singular-device.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
sliderImage:string[] = ["../../../assets/apple-ecosystem-web-banner_1_.webp","../../../assets/hp-web-banner_1.webp","../../../assets/pixels-carousel.webp"]
constructor(private search:SingularDeviceService,private store:Store<{"cart":string}>,private route:Router,private carousel:Store<{"carousel":boolean}>){}
cartLength:number = 0
hideCarousel:boolean = false
deviceSearch:string = ""
dataSource:any
filtering:boolean = false
rowInfo:string[] = ["image","name"]
go_cart(){
this.route.navigate(["/cart"])
}
goPhone(device:string){
this.route.navigate([`/desired/device/${device}`])
}

home(){
this.route.navigate(["/"])
}
fetchSearch(){
  this.filtering = true
this.search.FilterDevice(this.deviceSearch).then((data)=>{

this.dataSource = new MatTableDataSource(data.data)
console.log(this.dataSource)
}).catch((err)=>console.log(err))
}
ngOnInit(){
this.carousel.subscribe((state)=>{
this.hideCarousel = state.carousel
console.log(this.hideCarousel)
})

this.store.subscribe((state)=>{
var {cart} = state
this.cartLength = cart.length;
})
}



}    
