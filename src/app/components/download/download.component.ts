import { Component } from '@angular/core';

@Component({
  selector: 'download',
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
go(){
  window.location.href = "https://drive.google.com/file/d/1oaQs0H8ddimJ0M-3CHzl_pQRTuGPU7PO/view?usp=drive_link"
}
}
