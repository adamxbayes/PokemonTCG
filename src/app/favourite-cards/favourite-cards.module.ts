import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteCardsPageRoutingModule } from './favourite-cards-routing.module';

import { FavouriteCardsPage } from './favourite-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteCardsPageRoutingModule
  ],
  declarations: [FavouriteCardsPage]
})
export class FavouriteCardsPageModule {}
