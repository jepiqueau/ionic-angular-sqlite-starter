import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPassphrasePageRoutingModule } from './modal-passphrase-routing.module';

import { ModalPassphrasePage } from './modal-passphrase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPassphrasePageRoutingModule
  ],
  declarations: [ModalPassphrasePage]
})
export class ModalPassphrasePageModule {}
