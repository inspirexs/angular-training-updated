import { Component, OnInit } from '@angular/core';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  traveller: any = null;

  constructor(private mercuryClient: MercuryClientService) { }

  ngOnInit(): void {
  }

  test(): void{
    this.mercuryClient.getTraveller().subscribe( data => {
      console.log(data);
      this.traveller = data;
    }, error => {
      alert('There was an Error');
    });
  }

}
