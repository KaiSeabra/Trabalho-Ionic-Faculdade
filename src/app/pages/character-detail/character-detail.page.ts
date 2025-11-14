import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para NgIf
import { ActivatedRoute } from '@angular/router'; // Para pegar o ID da URL
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';

// Importando nossos pipes!
import { StatusColorPipe } from 'src/app/pipes/status-color-pipe';
import { GenderIconPipe } from 'src/app/pipes/gender-icon-pipe';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // <-- Importe
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonBadge,
    IonIcon,
    IonSkeletonText,
    StatusColorPipe, // <-- Importe o Pipe 1
    GenderIconPipe,  // <-- Importe o Pipe 2
  ],
})
export class CharacterDetailPage implements OnInit {
  character: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute, // Injetado
    private apiService: ApiService   // Injetado
  ) {}

  ngOnInit() {
    // Pega o parâmetro 'id' da URL
    const characterId = this.route.snapshot.paramMap.get('id');

    if (characterId) {
      this.apiService.getCharacterById(characterId).subscribe({
        next: (res) => {
          this.character = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        }
      });
    }
  }
}