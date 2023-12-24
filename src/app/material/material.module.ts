import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';


const material = [
  MatGridListModule,
  MatToolbarModule

]



@NgModule({

  imports: [material],
  exports : [material]
})
export class MaterialModule { }
