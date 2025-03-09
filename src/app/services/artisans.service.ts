import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import de l'opérateur 'map'

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  private artisansUrl = 'assets/data/artisans.json'; // Chemin vers fichier JSON
  
  constructor(private http: HttpClient) {}
  
  // Méthode pour récupérer tous les artisans
  getArtisans(): Observable<any[]> {
    return this.http.get<any[]>(this.artisansUrl)
  }

  // Nouvelle méthode pour récupérer un artisan spécifique par ID
  getArtisanById(id: string): Observable<any> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.find((artisan) => artisan.id === id)) // Filtrer par ID
    );
  }

  // Méthode pour récupérer les artisans d'une catégorie spécifique
  getArtisansByCategory(category: string): Observable<any[]> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.find((artisan) => artisan.category.toLowerCase() === category.toLowerCase())) // Filtrer par catégorie
    );
  }
  
}
