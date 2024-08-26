import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/landing/components/home/header/header.component';
import { FooterComponent } from './features/landing/components/home/footer/footer.component';
import { LandingModule } from './features/landing/landing.module';
import { CoursesModule } from './features/landing/components/Courses/courses.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
