import { Component,OnInit } from '@angular/core';
import { PixelsService } from '../../services/pixels.service';
import { Router } from '@angular/router';



@Component({
  selector: 'iphone',
  templateUrl: './iphone.component.html',
  styleUrl: './iphone.component.css'
})
export class IphoneComponent implements OnInit {
iphones:any[] = []
constructor(private iphone:PixelsService,private routing:Router){}


priceFormatter(PriceString:string):string{
  return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
  }
  
  priceChanger(PhonePrice:string):string{
  var exaggeratedPrice = +PhonePrice - 11350
  return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
  }


  Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
  }
  
  discountCalc(originalPrice:string,newPrice:string){
  var original = +originalPrice
  var newprice = +newPrice
  return  ((original - newprice)/original * 100).toFixed(2)
  }


  
  ngOnInit(){
  this.iphone.Fetch_Phone_Brands("iphone").then((data)=>{
  this.iphones = data.phonesFetched
  }).catch((err)=>console.log(err))
  }

}
