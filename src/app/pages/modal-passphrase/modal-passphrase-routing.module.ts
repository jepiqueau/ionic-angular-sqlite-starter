import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPassphrasePage } from './modal-passphrase.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPassphrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPassphrasePageRoutingModule {}
