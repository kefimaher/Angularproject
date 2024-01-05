import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residance.component.html',
  styleUrls: ['./residance.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    // ... (votre liste de résidences)
  ];

//  showApartments(residence: Residence) {
    // Implémenter la logique pour afficher les appartements de la résidence
  //}
  selectedResidence: Residence | null = null;

showApartments(residence: Residence) {
  this.selectedResidence = residence;
}
}
