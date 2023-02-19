import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counterState/counter.reducers';
import { COUNTER_STATE_NAME } from './counterState/counter.selector';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
    FormsModule
  ],
  exports:[
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent
  ]
})
export class CounterModule { }
