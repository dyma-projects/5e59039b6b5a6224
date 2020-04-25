import { Component, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component {
  public valeur: string;
  @ViewChild('myInput') myInput: ElementRef;

  constructor() { }

  updateView() {
    this.valeur = this.myInput.nativeElement.value;
  }
}
