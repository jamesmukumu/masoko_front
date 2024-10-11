import { Component,OnInit } from '@angular/core';

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


constructor(private hp:LaptopsService){}
  ngOnInit(){
    this.hp.Fetch_Laptops().then((data)=>{
      this.laptops = data.data
      this.count = data.count
    }).catch((err)=>console.log(err))
  }
}
