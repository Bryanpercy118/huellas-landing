import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './features/landing/components/landing-page/landing-page.component';
import { HeaderComponent } from './features/landing/components/header/header.component';
import { HeroComponent } from './features/landing/components/hero/hero.component';
import { AboutComponent } from './features/landing/components/about/about.component';
import { FeaturesComponent } from './features/landing/components/features/features.component';
import { PricingComponent } from './features/landing/components/pricing/pricing.component';
import { NewsComponent } from './features/landing/components/news/news.component';
import { TestimonialsComponent } from './features/landing/components/testimonials/testimonials.component';
import { FooterComponent } from './features/landing/components/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
