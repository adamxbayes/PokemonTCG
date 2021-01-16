import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
    const favouriteCardValues = {
      name: card.name,
      id: card.id,
      nationalPokedexNumber: card.nationalPokedexNumber,
      series: card.series,
      set: card.set
    };

    this.afs.collection('favourite-cards').add(favouriteCardValues).then((res)=>{
      console.log('res from adding', res)
      this.getFavouritePokemonCards();
    });

  }
}


