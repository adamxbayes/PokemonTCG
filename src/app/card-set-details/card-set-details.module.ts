import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSetDetailsPageRoutingModule } from './card-set-details-routing.module';

import { CardSetDetailsPage } from './card-set-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardSetDetailsPageRoutingModule
  ],
  declarations: [CardSetDetailsPage]
})
export class CardSetDetailsPageModule {}
