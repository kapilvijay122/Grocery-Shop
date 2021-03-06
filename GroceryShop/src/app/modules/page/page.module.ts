import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [HomeComponent, ContactUsComponent, AboutUsComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
