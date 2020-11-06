import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/modules/shared/services/mercury-client.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  traveller: Traveller;

  constructor(private mercuryClient: MercuryClientService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.traveller = data['traveller'];
    });
  }

}
