import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepartmentComponent } from 'src/app/components/employee-dept/department/department.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DepartmentComponent],
  exports: [DepartmentComponent]
})
export class DepartmentComponentModule {}
