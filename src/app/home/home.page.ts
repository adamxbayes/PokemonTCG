import { Component } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { CardSet } from 'src/models/set.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cardSets: CardSet[] = [];
  public loading = false;
  constructor() {
    this.getCardSets();
  }

  async getCardSets() {
    try {
      this.loading = true;
      await PokemonTCG.Set.all().then(res =>
        res.forEach(set => {
          const setModel = new CardSet(set);
          this.cardSets.push(setModel);
        }));
      this.loading = false;
    } catch {
      this.loading = false;
      console.log('could not grab list of card sets');
    };
    console.log(this.cardSets);
  }
}
