import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-favourite-cards',
  templateUrl: './favourite-cards.page.html',
  styleUrls: ['./favourite-cards.page.scss'],
})
export class FavouriteCardsPage implements OnInit {
  favouriteCards: any;
  loading: boolean;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.loading = true;
   this.favouriteCards = this.pokemonService.getFavouritePokemonCards();
   console.log(this.favouriteCards);
   this.loading = false;
  }

}
