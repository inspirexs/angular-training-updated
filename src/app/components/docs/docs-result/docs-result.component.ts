import { Component, OnInit } from '@angular/core';
import { Traveller } from '../../models/traveller';

@Component({
  selector: 'app-docs-result',
  templateUrl: './docs-result.component.html',
  styleUrls: ['./docs-result.component.css']
})
export class DocsResultComponent implements OnInit {
  traveller: Traveller = null;

  constructor() { }

  ngOnInit(): void {
  }

  setTraveller(traveller: Traveller): void{
    this.traveller = traveller;
  }
}
