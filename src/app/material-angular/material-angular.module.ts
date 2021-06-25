import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 

const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatCheckboxModule
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
