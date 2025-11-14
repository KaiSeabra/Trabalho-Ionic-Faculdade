import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
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
import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,   
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
        this.characters = [...this.characters, ...res.results];
        
        if (event) {
          (event as InfiniteScrollCustomEvent).target.complete();
        }
        
        this.currentPage++;

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