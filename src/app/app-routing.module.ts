import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/author-posts/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/author-posts/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'author',
    loadChildren: () => import('./pages/author-posts/author/author.module').then( m => m.AuthorPageModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./pages/author-posts/authors/authors.module').then( m => m.AuthorsPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/author-posts/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employee-dept/employees/employees.module').then( m => m.EmployeesPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee-dept/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./pages/employee-dept/department/department.module').then( m => m.DepartmentPageModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./pages/employee-dept/departments/departments.module').then( m => m.DepartmentsPageModule)
  },
  {
    path: 'modal-passphrase',
    loadChildren: () => import('./pages/modal-passphrase/modal-passphrase.module').then( m => m.ModalPassphrasePageModule)
  },
  {
    path: 'modal-encryption',
    loadChildren: () => import('./pages/modal-encryption/modal-encryption.module').then( m => m.ModalEncryptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
