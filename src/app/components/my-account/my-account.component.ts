import { Component, OnInit } from '@angular/core';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  traveller: Traveller;

  constructor(private mercuryClient: MercuryClientService) { }

  ngOnInit(): void {
    this.mercuryClient.getTraveller('PASSPORT', 'LU01201LU', 'ALA').subscribe(data => {
      console.log(data);
      this.traveller = data;
    }, error => {
      console.log(error);
    });
  }

}
