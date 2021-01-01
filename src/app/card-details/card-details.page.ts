import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/models/card.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  
  public card: Card;
  private isSaved: boolean;

  get iconValue(): string {
    return this.isSaved ? "heart-dislike-outline" : 'heart-outline';
  }
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
      } else {
        this.router.navigate(['']);
      }
    })
   }

  ngOnInit() {
    // get if card is stored or not
  }

  handleTopRightAction(){
    if (this.isSaved){
      this.removeCard();
    } else {
      this.saveCard();
    }
  }

  removeCard() {
    // remove card from store set isSaved to false;
  }
  saveCard() {
    // save card to store set isSaved to true;
  }

}
