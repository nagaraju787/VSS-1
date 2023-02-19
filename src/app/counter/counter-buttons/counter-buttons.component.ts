import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/appstore.state';
import { changeName, decrement, increment, reset } from '../counterState/counter.actions';
import { CounterState } from '../counterState/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {
name:any;
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
  }
  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

  changeName(){
    this.store.dispatch(changeName({name:this.name}))
  }
}
