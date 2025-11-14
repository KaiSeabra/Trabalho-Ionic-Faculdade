import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./pages/characters/characters.page').then((m) => m.CharactersPage),
  },
  {
    path: 'characters/:id', 
    loadComponent: () =>
      import('./pages/character-detail/character-detail.page').then(
        (m) => m.CharacterDetailPage
      ),
  },
];