import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListArtisansComponent } from './pages/list-artisans/list-artisans.component';
import { ArtisanCardComponent } from './pages/artisan-card/artisan-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';  


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list-artisans', component: ListArtisansComponent }, // Route pour afficher la liste des artisans
    { path: 'list-artisans/:category', component: ListArtisansComponent }, // Route pour afficher les artisans d'une catégorie
    { path: 'artisan-card/:id', component: ArtisanCardComponent }, // Route pour la fiche artisan avec paramètre :id
    { path: '**', component: NotFoundComponent }, // Route pour la page 404];
];
