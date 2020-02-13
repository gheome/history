import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule } from '@angular/material';

const imports = [
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  exports: [
    ...imports
  ],
  imports: [
    ...imports
  ]
})

export class MaterialModule { }
