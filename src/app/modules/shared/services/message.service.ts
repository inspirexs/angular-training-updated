import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();

  constructor() { }

  getSubject(): Subject<string> {
    return this.subject;
  }
}
