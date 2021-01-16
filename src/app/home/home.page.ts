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
  public favourites = true;
  public errorMessage: string;
  private selectedSet: CardSet;

  constructor(private router: Router) {
    this.setup();
    this.getCardSets();
    
  }
 async setup() {
    this.getCardSets().then(()=>{
      this.getFavourites();
    }).catch(()=>{
      this.errorMessage = "Could not get favourite cards from database.";
    })
    
  }
  getFavourites() {

  }

  goToFavourites(){
    this.router.navigate(['favourites']);
  }

  async getCardSets(): Promise<any> {
    var promise = new Promise<void>((resolve, reject) => {
      try {
        this.loading = true;
        PokemonTCG.Set.all().then(res =>
          res.forEach(set => {
            const setModel = new CardSet(set);
            this.cardSets.push(setModel);
          }));
        this.loading = false
        resolve();
      } catch {
        this.loading = false;
        this.errorMessage = 'Could not grab any card sets.';
        reject();
      };
    });
    return promise;
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
