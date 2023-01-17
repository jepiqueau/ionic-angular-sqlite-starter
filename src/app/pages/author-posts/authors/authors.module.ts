import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorsPageRoutingModule } from './authors-routing.module';

import { AuthorsPage } from './authors.page';
import { AuthorsComponent } from 'src/app/components/author-posts/authors/authors.component';
import { AuthorComponentModule } from 'src/app/shared/components/author-posts/author.shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorComponentModule,
    AuthorsPageRoutingModule
  ],
  declarations: [AuthorsPage, AuthorsComponent]
})
export class AuthorsPageModule {}
