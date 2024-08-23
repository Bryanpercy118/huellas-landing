import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './features/landing/components/home/landing-page/landing-page.component';
import { HeaderComponent } from './features/landing/components/home/header/header.component';
import { HeroComponent } from './features/landing/components/home/hero/hero.component';
import { AboutComponent } from './features/landing/components/home/about/about.component';
import { FeaturesComponent } from './features/landing/components/home/features/features.component';
import { PricingComponent } from './features/landing/components/home/pricing/pricing.component';
import { NewsComponent } from './features/landing/components/home/news/news.component';
import { TestimonialsComponent } from './features/landing/components/home/testimonials/testimonials.component';
import { FooterComponent } from './features/landing/components/home/footer/footer.component';
import { IndexComponent } from './features/landing/components/Courses/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    PricingComponent,
    NewsComponent,
    TestimonialsComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
