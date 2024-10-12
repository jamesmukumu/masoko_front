import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingularDeviceService } from '../../services/singular-device.service';


@Component({
  selector: 'singular-device',
  templateUrl: './singular-device.component.html',
  styleUrl: './singular-device.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SingularDeviceComponent implements OnInit {
constructor(private route:ActivatedRoute,private device:SingularDeviceService){}
urlPathDevice:string = ""
deviceFetched:boolean = false
deviceInformation:any
initialQuantity:number = 1
defaultImageIndex:number = 0

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 11350
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}
discountCalc(originalPrice:string,newPrice:string){
  var original = +originalPrice
  var newprice = +newPrice
  return  ((original - newprice)/original * 100).toFixed(2)
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
