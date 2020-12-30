import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { CardSet } from 'src/models/set.model';

@Component({
  selector: 'app-card-set-details',
  templateUrl: './card-set-details.page.html',
  styleUrls: ['./card-set-details.page.scss'],
})
export class CardSetDetailsPage implements OnInit {
  
  public loading: boolean;

  public setDetails: CardSet;
  private selectedSet: string;
  public logoUrl: any;
  public name: string;
  releaseDate: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedSet = this.router.getCurrentNavigation().extras.state.code;
      }
    })
   }

  ngOnInit() {
    if (this.selectedSet){
      this.getCardSets();
    }
  }

  async getCardSets() {
    try {
      this.loading = true;
      await PokemonTCG.Set.find(this.selectedSet).then(set => {
          this.setDetails = new CardSet(set);
          this.logoUrl = this.setDetails.logoUrl;
          this.name = this.setDetails.name;
          this.releaseDate = this.setDetails.releaseDate;
          
          console.log(this.setDetails);
        });
      this.loading = false;
    } catch {
      this.loading = false;
      console.log('could not grab set');
    };
  }

}
