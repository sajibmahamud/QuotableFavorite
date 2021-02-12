import { MenubarComponent } from './menubar/menubar.component';
import { FavoriteAuthorComponent } from './favorite-author/favorite-author.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
  {path:"author",component:AuthorComponent},
  {path:"favorite-author",component:FavoriteAuthorComponent},
  {path:"menubar",component:MenubarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
