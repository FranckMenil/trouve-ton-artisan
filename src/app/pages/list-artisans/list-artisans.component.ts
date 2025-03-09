import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // pour le pipe
import { ArtisansService } from '../../services/artisans.service'; // Service pour récupérer les données des artisans
import { CommonModule } from '@angular/common'; // Import pour *ngFor et *ngIf
import { RouterModule } from '@angular/router'; // Importer RouterModule
import { NgIf, NgFor } from '@angular/common'; // pour le pipe
import { CategoryFilterPipe } from '../../pipes/category-filter.pipe'; // Import du pipe standalone




@Component({
  selector: 'app-list-artisans',
  standalone: true,
  imports: [CommonModule,RouterModule,NgIf, NgFor, CategoryFilterPipe,], // Directives et Pipes
  templateUrl: './list-artisans.component.html',
  providers: [ArtisansService], // Fournisseur du service ArtisansService
  styleUrls: ['./list-artisans.component.scss']
})

export class ListArtisansComponent implements OnInit {
  artisans: any[] = []; // Tableau vide pour stocker les artisans
  filteredArtisans: any[] = []; // Liste des artisans filtrés
  searchCategory: string = ''; // Rechercher par categorie
  searchName: string = ''; // Rechercher par nom
  searchSpecialty: string = ''; // Rechercher par spécialité
  searchLocation: string = ''; // Rechercher par ville

  constructor(
    private artisansService: ArtisansService,  // Injection du service
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Utiliser le service pour récupérer les artisans
    this.artisansService.getArtisans().subscribe((data) => {
      this.artisans = data; // Stocke les artisans dans le tableau
    });

    // Récupérer la catégorie depuis l'URL
    this.route.paramMap.subscribe((params) => {
      this.searchCategory = params.get('category') || ''; // Récupérer la catégorie ou une chaîne vide
      // Debug: Vérifie si la méthode retourne les artisans
      console.log('Catégorie récupérée :', this.searchCategory);
    });
    

    // Récupérer les paramètres de recherche depuis l'URL
    this.route.queryParams.subscribe((params) => {
      this.searchName = params['name'] || '';
      this.searchSpecialty = params['specialty'] || '';
      this.searchLocation = params['location'] || '';
      console.log('Filtres récupérés :', this.searchName, this.searchSpecialty, this.searchLocation);
    });
  }
  

  // Méthode appelée depuis la barre de recherche pour mettre à jour les critères
  onSearchCriteriaChanged(criteria: any): void {
    this.searchName = criteria.name || '';
    this.searchSpecialty = criteria.specialty || '';
    this.searchLocation = criteria.location || '';
  }

  // Méthode Méthode pour afficher les étoiles selon la note
  getStars(note: string): string {
    const stars = Math.round(parseFloat(note));
    return '⭐'.repeat(stars); // Retourne des étoiles en fonction de la note
  }
}
