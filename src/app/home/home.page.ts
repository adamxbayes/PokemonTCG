import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { CardSet } from 'src/models/set.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cardSets: CardSet[] = [];
  public loading = false;

  private selectedSet: CardSet;

  constructor(private router: Router) {
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
  }

  onChange(selectedSet){
    this.selectedSet = selectedSet?.detail.value; // sets the set code.
  }

  navigateSetDetails(): void {
    let params: NavigationExtras = {
      state: {
        code: this.selectedSet
      }
    };
    this.router.navigate(['card-set-details'], params);
  }
}
