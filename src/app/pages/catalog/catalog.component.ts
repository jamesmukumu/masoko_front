import { Component,OnInit,inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PixelsComponent } from '../../components/pixels/pixels.component';
import { PixelsService } from '../../services/pixels.service';
import { Store } from '@ngrx/store';
import { savetoCart } from '../../redux/actions/action.add-cart';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{
devices:any[] = []
catalog:string = ""
fetched:boolean = false
readonly snack = inject(MatSnackBar)
constructor(private catalogInfo:PixelsService,private activeRouter:ActivatedRoute,private routing:Router,private store:Store<{"cart":string}>){}
FetchRoute(){
this.activeRouter.paramMap.subscribe((data)=>{
this.catalog = data.get("catalogname") ?? ""
})
}
Save_To_Cart(phoneSlug:string){
  this.store.dispatch(savetoCart({items:phoneSlug}))
  this.store.subscribe((state)=>console.log(state))
  this.snack.open("Device added to cart","cart",{
  verticalPosition:"top",
  horizontalPosition:"right"
  })
  }
  
  priceFormatter(PriceString:string):string{
    return PriceString.replace(/\B(?=(\d{3})+(?!\d))/g,",")
    }
    
    priceChanger(PhonePrice:string):string{
    var exaggeratedPrice = +PhonePrice 
    return exaggeratedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
    }
  
  cart(deviceSlug:string){
  this.Save_To_Cart(deviceSlug)
  this.routing.navigate(["/cart"])
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
this.FetchRoute()
console.log(this.catalog)
this.catalogInfo.Fetch_Phone_Brands(this.catalog).then((data)=>{
this.devices = data.phonesFetched
this.fetched = true
}).catch((err)=>console.log("err",err))
}

}
