import { Component,OnInit } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';


@Component({
  selector: 'pixels',
  templateUrl: './pixels.component.html',
  styleUrl: './pixels.component.css'
})
export class PixelsComponent {
pixelPhones:any[] = []
constructor(private pixels:PixelsService,private routing:Router){}

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

Navigator(urlPath:String){
  urlPath = urlPath.replace("/","")
  this.routing.navigate([`/desired/device/${urlPath}`])
  }
      
  
ngOnInit(){
this.pixels.Fetch_Phone_Brands("google").then((data)=>{
this.pixelPhones = data.phonesFetched
}).catch((err)=>console.log(err))
}


}
