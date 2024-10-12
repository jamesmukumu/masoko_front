import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopsService } from '../../services/laptops.service';

@Component({
  selector: 'laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent implements OnInit{
laptops:any[] = []
count?:number

priceFormatter(PriceString:string):string{
return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

FoolsPrice(actualPrice:string){
var exaggeratedPrice = +actualPrice - 20500
var clientPrice = exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
return clientPrice
}
Navigator(urlPath:String){
urlPath = urlPath.replace("/","")
this.routing.navigate([`/desired/device/${urlPath}`])
}
    


constructor(private hp:LaptopsService,private routing:Router){}
  ngOnInit(){
    this.hp.Fetch_Laptops().then((data)=>{
      this.laptops = data.data
      this.count = data.count
    }).catch((err)=>console.log(err))
  }
}
