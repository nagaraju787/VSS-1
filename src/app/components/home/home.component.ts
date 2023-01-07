import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private config:NgbCarouselConfig) { 
      // customize default values of carousels used by this component tree
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
