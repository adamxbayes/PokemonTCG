import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/models/api-response.model';
import { Card, FavouriteCard } from 'src/models/card.model';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  itemsCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>
  favouriteCards: Observable<any[]>

  constructor(public afs: AngularFirestore) {
  }

  getItems() {
    this.items = this.afs.collection('items').valueChanges();
    return this.items;
  }

  getFavouritePokemonCards() {
    this.favouriteCards = this.afs.collection('favourite-cards').valueChanges();
    return this.favouriteCards
  }

  addFavouritePokemonCard(card: Card) {
    const apiResponse = new ApiResponse;
    const favouriteCardValues = {
      name: card.name,
      id: card.id,
      nationalPokedexNumber: card.nationalPokedexNumber,
      series: card.series,
      set: card.set
    };
    if (this.canAddCard(favouriteCardValues)){
      this.afs.collection('favourite-cards').add(favouriteCardValues).then((res)=>{
        this.getFavouritePokemonCards();
        return apiResponse.success = true;
      });
    } else {
     apiResponse.success = false;
    }
  }

  removeFavouritePokemonCard(card: Card) {
    // TODO
  }

  canAddCard(card): boolean {
    return card.name !='' && card.id !=''; 
  }
}


