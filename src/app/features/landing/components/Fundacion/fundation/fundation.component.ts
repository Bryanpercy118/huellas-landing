import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
@Component({
  selector: 'app-fundation',
  templateUrl: './fundation.component.html',
  styleUrls: ['./fundation.component.css']
})
export class FundationComponent {

  ngOnInit(): void {
    new Splide('#splide', {
      type   : 'loop',
      perPage: 3,
      autoplay: true,
    }).mount();
  }

}
