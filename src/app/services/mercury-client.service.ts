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

  getTraveller(): Observable<Traveller>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'mobile_traveller_app_token'
    });

    return this.httpClient.get<Traveller>('https://mercury-api.st.globalblue.com:443/api/Globalblue/3.0/Members/documentType=PASSPORT&documentNumber=LU01201LU&documentCountry=ALA', { headers: httpHeaders } );
  }
}
