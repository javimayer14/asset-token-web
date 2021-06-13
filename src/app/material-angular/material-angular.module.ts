import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    MAT_MODULES
  ],
  exports: [
    MAT_MODULES
  ]
})
export class MaterialAngularModule { }
