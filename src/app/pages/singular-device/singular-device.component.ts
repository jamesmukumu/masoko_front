import { Component,OnInit,ViewEncapsulation,inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SingularDeviceService } from '../../services/singular-device.service';
import { Store } from '@ngrx/store';
import { savetoCart } from '../../redux/actions/action.add-cart';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'singular-device',
  templateUrl: './singular-device.component.html',
  styleUrl: './singular-device.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SingularDeviceComponent implements OnInit {
  readonly snack = inject(MatSnackBar)
constructor(private routing:Router,private store:Store<{"cart":string}>,private route:ActivatedRoute,private device:SingularDeviceService){}
urlPathDevice:string = ""
deviceFetched:boolean = false
deviceInformation:any
initialQuantity:number = 1
defaultImageIndex:number = 0

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice 
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}
discountCalc(originalPrice:string,newPrice:string){
  var original = +originalPrice
  var newprice = +newPrice
  return  ((original - newprice)/original * 100).toFixed(2)
  }
  Save_To_Cart(phoneSlug:string){
    this.store.dispatch(savetoCart({items:phoneSlug}))
    this.store.subscribe((state)=>console.log(state))
    this.snack.open("Device added to cart","cart",{
    verticalPosition:"top",
    horizontalPosition:"right"
    })
    }
  
  cart(deviceSlug:string){
    this.Save_To_Cart(deviceSlug)
    this.routing.navigate(["/cart"])
    }
AdjustMain(thumbnail:string){
this.defaultImageIndex = this.deviceInformation.gallery.findIndex((gallery:any) => gallery.thumbnail == thumbnail)
console.log(this.defaultImageIndex)
}
increaseQuantity(){
this.initialQuantity += 1
}
decreaseQuantity(){
this.initialQuantity -= 1
}
ngOnInit(){
this.route.paramMap.subscribe((data)=>{
var activeRoute = data.get("deviceurl") ?? ""
this.urlPathDevice = "/"+activeRoute
})
this.device.Fetch_Singular_Device(this.urlPathDevice).then((data)=>{
if(data.message  == 'Device found'){
this.deviceInformation = data.data
this.deviceFetched = true
}else{
this.deviceFetched = false
}
})
}
}
