import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagLoginPageRoutingModule } from './pag-login-routing.module';

import { PagLoginPage } from './pag-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagLoginPageRoutingModule
  ],
  declarations: [PagLoginPage]
})
export class PagLoginPageModule {}
