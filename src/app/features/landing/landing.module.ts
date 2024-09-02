import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { AboutComponent } from './components/home/about/about.component';
import { NewsComponent } from './components/home/news/news.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { PricingComponent } from './components/home/pricing/pricing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CoursesModule } from './components/Courses/courses.module';
import { UsComponent } from './components/Us/us/us.component';
import { CountUpModule } from 'ngx-countup';
import { ContactsComponent } from './components/Contact/contacts/contacts.component';
import { FundationComponent } from './components/Fundacion/fundation/fundation.component';
import { MuseoComponent } from './components/Museo/museo/museo.component';
import { AcordeonModelComponent } from './components/Museo/components/acordeon-model/acordeon-model.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    NewsComponent,
    PricingComponent,
    TestimonialsComponent,
    UsComponent,
    ContactsComponent,
    FundationComponent,
    MuseoComponent,
    AcordeonModelComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CoursesModule,
    CountUpModule
    
  ]
})
export class LandingModule { }
