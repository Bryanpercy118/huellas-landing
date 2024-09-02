import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ` .whatsapp-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999; 
  }
  
  .whatsapp-icon img {
    width: 55px;
    height: auto;
  }`
})
export class LayoutComponent {

}
