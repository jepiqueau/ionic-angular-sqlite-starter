import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentPageRoutingModule } from './department-routing.module';

import { DepartmentPage } from './department.page';
import { DepartmentComponentModule } from 'src/app/shared/components/employee-dept/department.shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentComponentModule,
    DepartmentPageRoutingModule
  ],
  declarations: [DepartmentPage]
})
export class DepartmentPageModule {}
