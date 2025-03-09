import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'; // Pour obtenir l'ID depuis l'URL
import { ArtisansService } from '../../services/artisans.service'; // Service pour les données JSON
import { FormsModule, NgForm } from '@angular/forms';  // Ajout de l'import FormsModule
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; // EmailJS 

@Component({
  selector: 'app-artisan-card',
  imports: [FormsModule],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent implements OnInit{
  artisan: any = {}; // Stocke les détails de l'artisan
  artisanId: string = ''; // ID récupéré depuis l'URL

  constructor(
    private route: ActivatedRoute, // Pour accéder aux paramètres de la route
    private artisansService: ArtisansService // Injection du service
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'artisan à partir des paramètres de l'URL
    this.artisanId = this.route.snapshot.paramMap.get('id') || '';

    // Récupérer les détails de l'artisan en fonction de l'ID
    this.artisansService.getArtisanById(this.artisanId).subscribe((data) => {
      this.artisan = data;
    });
  }

  // Méthode pour afficher les étoiles en fonction de la note
  getStars(note: string): string {
    const stars = Math.round(parseFloat(note)); // Arrondir la note
    return '⭐'.repeat(stars); // Génère les étoiles
  }

  // Méthode fictive pour traiter le formulaire de contact
  onSubmitForm(form: NgForm): void {
    const serviceId = 'service_kq6z1ad'; // ID du service configuré dans EmailJS
    const templateId = 'template_4jtxumt'; // ID du modèle EmailJS
    const publicKey = 'FeDYpsHplLLK7Hqg4'; // clé publique 
    
    emailjs.send(serviceId, templateId, form.value, publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email envoyé avec succès !');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Erreur lors de l\'envoi de l\'email.');
      });
  }
}
