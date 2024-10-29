import { Component,OnInit,inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { hideDialog } from '../../redux/actions/action.hideAppdialog';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'download',
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  readonly snack = inject(MatDialog)
  constructor(private store:Store){}
check(event:any){
var {checked} = event
this.store.dispatch((hideDialog()))  
this.snack.closeAll()  
}
go(){
  window.location.href = "https://drive.google.com/file/d/1oaQs0H8ddimJ0M-3CHzl_pQRTuGPU7PO/view?usp=drive_link"
}
}
