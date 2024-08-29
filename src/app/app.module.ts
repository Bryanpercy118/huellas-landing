import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/landing/components/home/header/header.component';
import { FooterComponent } from './features/landing/components/home/footer/footer.component';
import { LandingModule } from './features/landing/landing.module';

import { environment } from '../enviroments/environment';
import { PlatformModule } from './features/platform/platform.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


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
    PlatformModule,
   
    
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"huellasdelmaestro-6cd9d","appId":"1:388946467613:web:14a2ea596db0bb8e2e1ff4","storageBucket":"huellasdelmaestro-6cd9d.appspot.com","apiKey":"AIzaSyBclSxE15myzQMUBBtCfgGf48UG-AI79ts","authDomain":"huellasdelmaestro-6cd9d.firebaseapp.com","messagingSenderId":"388946467613","measurementId":"G-GBWFBHHDQW"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
