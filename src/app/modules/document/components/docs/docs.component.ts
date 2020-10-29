import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentRequest } from 'src/app/components/models/document-request';
import { MercuryClientService } from 'src/app/services/mercury-client.service';
import { MessageService } from 'src/app/services/message.service';
import { DocsResultComponent } from './docs-result/docs-result.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  @ViewChild(DocsResultComponent) private docsResult: DocsResultComponent;
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
      this.docsResult.setTraveller(data);
    }, error => {
      alert('There was an Error');
    });
  }

  clearTraveller(): void{
    this.docsResult.setTraveller(null);
  }

  submitForm(): void{
    if (this.documentForm.valid){
      console.log(this.documentForm);
      const documentRequest: DocumentRequest = Object.assign({}, this.documentForm.value);
      console.log(documentRequest);

      this.mercuryClient.getTraveller(documentRequest.documentType, documentRequest.documentNumber, documentRequest.documentCountry)
      .subscribe(data => {
        console.log(data);
        this.docsResult.setTraveller(data);
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
