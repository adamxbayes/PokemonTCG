import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  itemsCollection: AngularFirestoreCollection<Item>
  items: Observable<Item[]>
  favouriteCards: Observable<Item[]>

  constructor(public afs: AngularFirestore) { 
  }

  getItems() {
    this.items = this.afs.collection('items').valueChanges();
    return this.items;
  }

  getFavouritePokemonCards() {
    this.favouriteCards = this.afs.collection('favourite-cards').valueChanges();
    return this.favouriteCards;
  }
}


