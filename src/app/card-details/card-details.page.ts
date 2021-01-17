import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/models/card.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  public card: Card;
  private isSaved: boolean;
  errorMessage: string;
  loading: boolean;
  iconValue: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private pokemonService: PokemonService) {

    this.route.queryParams.subscribe(params => {
  
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
        this.handleCard();
      } else {
        this.router.navigate(['']);
      }
    })
  }
  handleCard() {
    console.log('handle card called', this.card);
    this.loading = true;
    this.checkIfCardIsSaved();
      console.log('if block');
      try {
        PokemonTCG.Card.find(this.card.id).then((cardDetails)=>{
          this.card = cardDetails;
          console.log(cardDetails, 'card details returned for card');

        }).catch(()=>{
          console.log('catch hit');
          this.errorMessage = 'could not find card.';
         })
         this.loading = false;
      } catch {
        this.errorMessage = 'could not find card.';
        this.loading = false;
      }
    
  }

  private checkIfCardIsSaved() {
    this.pokemonService.getFavouritePokemonCards().subscribe((res => {

      const cardIsSaved = res.find(c => c.id === this.card.id);
      this.iconValue = cardIsSaved ? 'heart' : 'heart-outline';
    }));
  }

  handleTopRightAction() {
    console.log('called');
    this.saveCard();
  }

  removeCard() {
    // remove card from store set isSaved to false;
    this.pokemonService.removeFavouitePokemonCard(this.card);
  }
  saveCard() {
    this.pokemonService.addFavouritePokemonCard(this.card);
    // save card to store set isSaved to true;
  }

}
