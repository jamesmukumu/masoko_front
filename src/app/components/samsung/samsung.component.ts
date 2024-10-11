import { Component,OnInit } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';

@Component({
  selector: 'samsung',
  templateUrl: './samsung.component.html',
  styleUrl: './samsung.component.css'
})
export class SamsungComponent implements OnInit {
samsungPhone:any[] = []
constructor(private phone:PixelsService){}



priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 3350
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

discountCalc(originalPrice:string,newPrice:string){
var original = +originalPrice
var newprice = +newPrice
return  ((original - newprice)/original * 100).toFixed(2)
}

ngOnInit(){
this.phone.Fetch_Phone_Brands("vivo").then((data)=>{
this.samsungPhone = data.phonesFetched
}).catch((err)=>console.log(err))
}
}
