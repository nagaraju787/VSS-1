import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/appstore.state';
import { getCounter, getCounterName } from '../counterState/counter.selector';
import { CounterState } from '../counterState/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
 counter:number=0;
 name:any
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter)=>{this.counter=counter});
    this.store.select(getCounterName).subscribe((name)=>{this.name=name})
  }


}
