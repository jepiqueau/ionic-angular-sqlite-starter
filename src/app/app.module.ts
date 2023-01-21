import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLiteService } from './services/sqlite.service';
import { InitializeAppService } from './services/initialize.app.service';
import { AuthorPostsService } from './services/author-posts.service';
import { DepartmentEmployeesService } from './services/department-employees.service';
import { CategoryComponentModule } from './shared/components/author-posts/category.shared.module';
import { AuthorComponentModule } from './shared/components/author-posts/author.shared.module';
import { PostComponentModule } from './shared/components/author-posts/post.shared.module';

export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    CategoryComponentModule, AuthorComponentModule, PostComponentModule,
    AppRoutingModule],
  providers: [SQLiteService,
    InitializeAppService,
    AuthorPostsService,
    DepartmentEmployeesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
