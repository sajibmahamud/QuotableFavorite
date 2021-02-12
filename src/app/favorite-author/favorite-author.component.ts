import { FavoriteModel } from './../Model/favorite.model';
import { FavoriteAuthorService } from './../Service/favorite-author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.scss']
})
export class FavoriteAuthorComponent implements OnInit {
ListOfComponent:FavoriteModel[]=[];
  constructor(
   private favoriteServive:FavoriteAuthorService,
  ) {
   }

  ngOnInit(){
    this.ListItemComponent();
  }

  ListItemComponent(){
    this.favoriteServive.listItemComponent().subscribe((reasult:any)=>{
      if(reasult){
        console.log(reasult.results);
        this.ListOfComponent=reasult.results as FavoriteModel[];
      }
    })
  }

}
