import { Component,OnInit } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
@Component({
  selector: 'pixels',
  templateUrl: './pixels.component.html',
  styleUrl: './pixels.component.css'
})
export class PixelsComponent {
pixelPhones:any[] = []
constructor(private pixels:PixelsService){}

priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
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

ngOnInit(){
this.pixels.Fetch_Phone_Brands("google").then((data)=>{
this.pixelPhones = data.phonesFetched
}).catch((err)=>console.log(err))
}


}
