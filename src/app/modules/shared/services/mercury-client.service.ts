import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Traveller } from 'src/app/models/traveller';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Injectable()
export class MercuryClientService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  test(): void{
    alert('TEST WORKS');
  }

  getTraveller(documentType: string, documentNumber: string, documentCountry: string): Observable<Traveller>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: this.authService.getToken()
    });

    return this.httpClient.get<Traveller>('https://mercury-api.st.globalblue.com:443/api/Globalblue/3.0/Members/documentType=' + documentType + '&documentNumber=' + documentNumber + '&documentCountry=' + documentCountry, { headers: httpHeaders } );
  }
}
