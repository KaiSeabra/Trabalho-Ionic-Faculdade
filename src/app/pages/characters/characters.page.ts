import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para NgIf e NgFor
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSkeletonText,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent } from '@ionic/core';
import { ApiService } from 'src/app/services/api.service'; // Nosso Serviço

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // <-- Importe
    RouterLink,   // <-- Importe
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSkeletonText,
    IonButtons,
    IonBackButton,
  ],
})
export class CharactersPage implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    this.apiService.getCharacters(this.currentPage).subscribe({
      next: (res) => {
        this.isLoading = false;
        // Adiciona os novos resultados ao array existente
        this.characters = [...this.characters, ...res.results];
        
        // Informa ao InfiniteScroll que a carga terminou
        if (event) {
          (event as InfiniteScrollCustomEvent).target.complete();
        }
        
        // Prepara para a próxima página
        this.currentPage++;

        // Desativa o infinite scroll se não houver mais páginas
        if (!res.info.next) {
          if (event) (event as InfiniteScrollCustomEvent).target.disabled = true;
        }
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        if (event) (event as InfiniteScrollCustomEvent).target.complete();
      }
    });
  }
}