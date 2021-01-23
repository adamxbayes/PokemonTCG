import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FavouriteCard } from 'src/models/card.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-favourite-cards',
  templateUrl: './favourite-cards.page.html',
  styleUrls: ['./favourite-cards.page.scss'],
})
export class FavouriteCardsPage implements OnInit {
  favouriteCards: any;
  loading: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
   this.loading = true;
   this.loading = false;
  this.getFavourites();
  }

  public getFavourites(){
  this.pokemonService.getFavouritePokemonCards().subscribe((res)=>{
    this.favouriteCards = res;
})
}

public viewCard(card: FavouriteCard){
  let params: NavigationExtras = {
    state: {
      card: card
    }
}
this.router.navigate(['card-details'], params);
}
}
