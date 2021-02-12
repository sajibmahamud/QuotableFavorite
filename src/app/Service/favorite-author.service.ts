import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteAuthorService {

  constructor(private http: HttpClient) { }
  listItemComponent() {
    return this.http.get("https://api.quotable.io/authors?limit=10&skip=20")
  }
}
