import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-set-details',
  templateUrl: './card-set-details.page.html',
  styleUrls: ['./card-set-details.page.scss'],
})
export class CardSetDetailsPage implements OnInit {
  
  private selectedSet: String;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedSet = this.router.getCurrentNavigation().extras.state.code;
      }
    })
   }

  ngOnInit() {
    if (this.selectedSet){
      console.log("we got a selected set lets get that set details then!");
    }
  }

}
