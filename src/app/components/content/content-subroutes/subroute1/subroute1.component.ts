import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/modules/shared/services/message.service';

@Component({
  selector: 'app-subroute1',
  templateUrl: './subroute1.component.html',
  styleUrls: ['./subroute1.component.css']
})
export class Subroute1Component implements OnInit {
  message: string = 'Lubo';

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage(): void{
    this.messageService.sendMessage(this.message);
  }
}
