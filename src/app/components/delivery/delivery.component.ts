import { Component } from '@angular/core';

@Component({
  selector: 'delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
First_Name:string =""
Second_Name:string = ""
Phone:string = ""
errMessage:string = ""
Regions:string[] = ["Nakuru","Nairobi","Kisumu","Mombasa","Nyeri","Baringo","Meru","Eldoret","Garissa","Busia"]
Location:string = ""
see_phone(phone:string){


if(phone.startsWith("07") || phone.startsWith("01")){
this.errMessage = ""
}else{
this.errMessage = "This phone format is not recognized"
}
}

}
