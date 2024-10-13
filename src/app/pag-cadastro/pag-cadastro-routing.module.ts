import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagCadastroPage } from './pag-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PagCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagCadastroPageRoutingModule {}
