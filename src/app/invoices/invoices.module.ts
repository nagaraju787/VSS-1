import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    InvoicesComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule
  ]
})
export class InvoicesModule { }
