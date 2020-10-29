import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercuryClientService } from 'src/app/services/mercury-client.service';
import { DocumentRequest } from '../models/document-request';
import { Traveller } from '../models/traveller';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  traveller: Traveller = null;
  documentForm: FormGroup;

  constructor(private mercuryClient: MercuryClientService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.documentForm = this.fb.group({
      documentType: ['', [Validators.required, Validators.pattern('(PASSPORT|ID_CARD)')]],
      documentNumber: ['', Validators.required],
      documentCountry: ['', Validators.required]
    });
  }

  getDefaultTraveller(): void{
    this.mercuryClient.getTraveller('PASSPORT', 'LU01201LU', 'ALA').subscribe( data => {
      console.log(data);
      this.traveller = data;
    }, error => {
      alert('There was an Error');
    });
  }

  clearTraveller(): void{
    this.traveller = null;
    console.log(this.documentForm.get('documentType').hasError('required'));
    Object.keys(this.documentForm.controls).forEach(field => {
      const control = this.documentForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  submitForm(): void{
    if (this.documentForm.valid){
      console.log(this.documentForm);
      const documentRequest: DocumentRequest = Object.assign({}, this.documentForm.value);
      console.log(documentRequest);

      this.mercuryClient.getTraveller(documentRequest.documentType, documentRequest.documentNumber, documentRequest.documentCountry)
      .subscribe(data => {
        console.log(data);
        this.traveller = data;
      }, error => {
        console.log(error);
        alert('Ups Error!');
      });
    }
    else{
      alert('Form Submitted INVALID');
    }

  }

}
