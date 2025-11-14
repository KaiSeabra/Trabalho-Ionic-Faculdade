import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  
  getCharacters(page = 1): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/character?page=${page}`);
  }

  
  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/character/${id}`);
  }
}