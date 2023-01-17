import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { CategoriesComponent } from 'src/app/components/author-posts/categories/categories.component';
import { CategoryComponentModule } from 'src/app/shared/components/author-posts/category.shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryComponentModule,
    CategoriesPageRoutingModule
  ],
  declarations: [CategoriesPage, CategoriesComponent]
})
export class CategoriesPageModule {}
