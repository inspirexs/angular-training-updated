import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();

  constructor() { }

  getMessageReceiver(): Observable<string> {
    return this.subject.asObservable();
  }

  sendMessage(message: string): void{
    this.subject.next(message);
  }
}
