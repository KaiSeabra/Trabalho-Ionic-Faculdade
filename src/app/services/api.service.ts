import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // CORREÇÃO: URL da API estava formatada como Markdown. Agora está correta.
  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  // Método para buscar a lista de personagens (com paginação)
  getCharacters(page = 1): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/character?page=${page}`);
  }

  // Método para buscar um personagem específico pelo ID
  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/character/${id}`);
  }
}