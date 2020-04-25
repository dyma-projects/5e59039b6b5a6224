import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() enChangeantCompteur: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  augmentValeur() {
    this.compteur++;
    this.enChangeantCompteur.emit(this.compteur);
  }

  baisseValeur() {
    this.compteur--;
    this.enChangeantCompteur.emit(this.compteur);
  }
}
