import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesPageRoutingModule } from './employees-routing.module';

import { EmployeesPage } from './employees.page';
import { EmployeesComponent } from 'src/app/components/employee-dept/employees/employees.component';
import { EmployeeComponentModule } from 'src/app/shared/components/employee-dept/employees.shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeComponentModule,
    EmployeesPageRoutingModule
  ],
  declarations: [EmployeesPage, EmployeesComponent]
})
export class EmployeesPageModule {}
