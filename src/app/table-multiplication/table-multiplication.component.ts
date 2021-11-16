import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrls: ['./table-multiplication.component.css']
})
export class TableMultiplicationComponent implements OnInit {

  @Input()
  chiffre!: number;

  constructor() { }

  tabNombre = [1,2,3,4,5,6,7,8,9,10];
  i = 0;
  resultat = 0;
  tabResultat = new Array();

  

  ngOnInit(): void {
    for (this.i; this.i < this.tabNombre.length; this.i++) {
      this.resultat = this.tabNombre[this.i] * this.chiffre;
      this.tabResultat.push(this.resultat);      
    }
  }



}
