import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
    time$:any;
  constructor() { }
newDate:any=new Date();
  ngOnInit(): void {
    this.time$ = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

}
