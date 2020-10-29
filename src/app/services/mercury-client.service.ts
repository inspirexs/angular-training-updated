import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Traveller } from '../components/models/traveller';

@Injectable()
export class MercuryClientService {

  constructor(private httpClient: HttpClient) { }

  test(): void{
    alert('TEST WORKS');
  }

  getTraveller(documentType: string, documentNumber: string, documentCountry: string): Observable<Traveller>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'mobile_traveller_app_token'
    });

    return this.httpClient.get<Traveller>('https://mercury-api.st.globalblue.com:443/api/Globalblue/3.0/Members/documentType=' + documentType + '&documentNumber=' + documentNumber + '&documentCountry=' + documentCountry, { headers: httpHeaders } );
  }
}
