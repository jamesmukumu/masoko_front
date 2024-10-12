import { Component,OnInit } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';



@Component({
  selector: 'vivo',
  templateUrl: './vivo.component.html',
  styleUrl: './vivo.component.css'
})
export class VivoComponent implements OnInit{
vivoPhones:any[] = []
constructor(private phone:PixelsService,private routing:Router){}



priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}
Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
}

priceChanger(PhonePrice:string):string{
var exaggeratedPrice = +PhonePrice - 4350
return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

discountCalc(originalPrice:string,newPrice:string){
var original = +originalPrice
var newprice = +newPrice
return  ((original - newprice)/original * 100).toFixed(2)
}

ngOnInit(){
this.phone.Fetch_Phone_Brands("samsung").then((data)=>{
this.vivoPhones = data.phonesFetched
}).catch((err)=>console.log(err))
}
}
