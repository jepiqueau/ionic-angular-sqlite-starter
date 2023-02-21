import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEncryptionPageRoutingModule } from './modal-encryption-routing.module';

import { ModalEncryptionPage } from './modal-encryption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEncryptionPageRoutingModule
  ],
  declarations: [ModalEncryptionPage]
})
export class ModalEncryptionPageModule {}
