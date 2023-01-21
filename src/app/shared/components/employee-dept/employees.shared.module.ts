import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from 'src/app/components/employee-dept/employee/employee.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent]
})
export class EmployeeComponentModule {}
