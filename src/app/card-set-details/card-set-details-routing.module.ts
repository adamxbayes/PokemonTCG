import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardSetDetailsPage } from './card-set-details.page';

const routes: Routes = [
  {
    path: '',
    component: CardSetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSetDetailsPageRoutingModule {}
