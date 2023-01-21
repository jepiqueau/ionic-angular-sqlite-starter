import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentsPageRoutingModule } from './departments-routing.module';

import { DepartmentsPage } from './departments.page';
import { DepartmentComponentModule } from 'src/app/shared/components/employee-dept/department.shared.module';
import { DepartmentsComponent } from 'src/app/components/employee-dept/departments/departments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentComponentModule,
    DepartmentsPageRoutingModule
  ],
  declarations: [DepartmentsPage, DepartmentsComponent]
})
export class DepartmentsPageModule {}
