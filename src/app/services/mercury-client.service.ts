import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MercuryClientService {

  constructor(private httpClient: HttpClient) { }

  test(): void{
    alert('TEST WORKS');
  }

  getTraveller(): Observable<any>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'mobile_traveller_app_token'
    });

    return this.httpClient.get<any>('https://mercury-api.st.globalblue.com:443/api/Globalblue/3.0/Members/documentType=PASSPORT&documentNumber=LU01201LU&documentCountry=ALA', { headers: httpHeaders } );
  }
}
