import { Component,HostListener } from '@angular/core';
import { RouterModule , Router} from '@angular/router';
import { CommonModule } from '@angular/common'; // Pour les directives de base
import { FormsModule } from '@angular/forms'; // Pour utiliser [(ngModel)]



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule , CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  searchName: string = ''; // Variable liée au champ "Nom"
  searchSpecialty: string = ''; // Variable liée au champ "Spécialité"
  searchLocation: string = ''; // Variable liée au champ "Ville"

  menuOpen: boolean = false; // État du menu burger (fermé par défaut)
  isMobile: boolean = window.innerWidth < 1024; // Détecte si on est sur mobile
  

  constructor(private router: Router) {}

  // Méthode pour déclencher une recherche
  onSearch(): void {
    this.router.navigate(['/list-artisans'], {
      queryParams: {
        
        name: this.searchName,
        specialty: this.searchSpecialty,
        location: this.searchLocation,
      },
    });
  }
  // Méthode pour ouvrir/fermer le menu burger
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Listener pour fermer le menu burger si l'écran est redimensionné en version desktop
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = event.target.innerWidth < 1024; // Met à jour la taille d'écran en temps réel

    if (!this.isMobile) {
      this.menuOpen = false; // Ferme le menu burger si on est sur un grand écran
    }
  }
}
