import { Component,inject,OnInit } from '@angular/core';
import { DownloadComponent } from '../../components/download/download.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { hideDialog } from '../../redux/actions/action.hideAppdialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
readonly snack = inject(MatDialog)
dialogShow:any
constructor(private store:Store<{"app":string}>){}
check(){  
  this.store.subscribe((state:any)=>{
    console.log(state)
    var {app} = state
   console.log(app)
    if(!app){
      this.snack.open(DownloadComponent)
    }else{
      console.log("ttydjj")
    }
    })
}

ngOnInit(){ 
this.check()
}
}
