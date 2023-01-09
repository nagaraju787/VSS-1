import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooteerComponent } from './footeer/footeer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    HeaderComponent,
    FooteerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports:[HeaderComponent,
     FooteerComponent]
})
export class CoreModule { }
