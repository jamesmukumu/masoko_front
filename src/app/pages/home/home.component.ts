import { Component,inject,OnInit } from '@angular/core';
import { DownloadComponent } from '../../components/download/download.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
readonly snack = inject(MatDialog)


ngOnInit(){
this.snack.open(DownloadComponent)
}
}
