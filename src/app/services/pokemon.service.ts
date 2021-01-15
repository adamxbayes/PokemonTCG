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

  constructor(public afs: AngularFirestore) { 
    this.items = afs.collection('items').valueChanges();  //returns collection as observable
  }

  getItems() {
    return this.items;
  }
}


