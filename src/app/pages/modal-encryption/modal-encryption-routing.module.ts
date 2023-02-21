import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEncryptionPage } from './modal-encryption.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEncryptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEncryptionPageRoutingModule {}
