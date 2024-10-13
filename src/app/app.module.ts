import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from "@angular/material/progress-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from "@angular/material/card"
import {MatIconModule} from "@angular/material/icon"
import {MatInputModule} from "@angular/material/input"
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSidenavModule} from "@angular/material/sidenav"
import { saveCartReducer } from './redux/reducers/reducer.save_cart';
import {MatTreeModule} from "@angular/material/tree"
import { StoreModule } from '@ngrx/store';
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
import { SingularDeviceComponent } from './pages/singular-device/singular-device.component';
import {MatTooltipModule} from "@angular/material/tooltip"
import {MatTabsModule} from "@angular/material/tabs";
import { OnePlusComponent } from './components/one-plus/one-plus.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { NavOptionsComponent } from './components/nav-options/nav-options.component'



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
    PixelsComponent,
    SingularDeviceComponent,
    OnePlusComponent,
    BottomNavComponent,
    NavOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  MatProgressBarModule,
  StoreModule.forRoot({"cart":saveCartReducer}),
    MatButtonModule,
    MatCardModule,
    ProgressBarModule,
    MatTooltipModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatBadgeModule,
    MatTreeModule,
    CarouselComponent,
    MatSidenavModule,
    CarouselControlComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective,
    CarouselIndicatorsComponent,
    MatIconModule,
    RouterModule.forRoot([
      {
        path:"desired/device/:deviceurl",
        component:SingularDeviceComponent
      },
{
  path:"",
  component:HomeComponent
},

    ])
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
