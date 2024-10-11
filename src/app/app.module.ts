import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from "@angular/material/card"
import {MatIconModule} from "@angular/material/icon"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { HomeComponent } from './pages/home/home.component';
import { SamsungComponent } from './components/samsung/samsung.component';
import { IphoneComponent } from './components/iphone/iphone.component';
import { VivoComponent } from './components/vivo/vivo.component';
import { FooterComponent } from './components/footer/footer.component';
import { PixelsComponent } from './components/pixels/pixels.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaptopsComponent,
    HomeComponent,
    SamsungComponent,
    IphoneComponent,
    VivoComponent,
    FooterComponent,
    PixelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    CarouselComponent,
    CarouselControlComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective,
    CarouselIndicatorsComponent,
    MatIconModule,
    RouterModule.forRoot([
{
  path:"",
  component:HomeComponent
}
    ])
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
