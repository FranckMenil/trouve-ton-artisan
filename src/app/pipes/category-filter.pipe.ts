import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true ,
})
export class CategoryFilterPipe implements PipeTransform {
  transform(artisans: any[], searchCategory: string , searchName:string , searchSpeciality:string , searchLocation:string ): any[] {
    if (!searchCategory.trim() && !searchName.trim() && !searchSpeciality.trim() && !searchLocation.trim()) {
      return artisans; // Si la categorie est vide , retourne la liste complète
    }
   
    // Filtres de recherche
    return artisans.filter((artisan) => {
      const matchesCategory = searchCategory 
        ? artisan.category.toLowerCase().includes(searchCategory.toLowerCase()) 
        : false;

      const matchesName = searchName 
        ? artisan.name.toLowerCase().includes(searchName.toLowerCase()) 
        : false;

      const matchesSpecialty = searchSpeciality 
        ? artisan.specialty.toLowerCase().includes(searchSpeciality.toLowerCase()) 
        : false;

      const matchesCity = searchLocation 
        ? artisan.location.toLowerCase().includes(searchLocation.toLowerCase()) 
        : false;

      // Un artisan doit satisfaire tous les critères remplis
      return matchesCategory || matchesName || matchesSpecialty || matchesCity;
    });
  }
}
