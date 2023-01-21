import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';
import { EmployeeComponentModule } from 'src/app/shared/components/employee-dept/employees.shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeComponentModule,
    EmployeePageRoutingModule
  ],
  declarations: [EmployeePage]
})
export class EmployeePageModule {}
