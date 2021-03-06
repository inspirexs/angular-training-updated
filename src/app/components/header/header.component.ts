import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message: string;

  constructor(private messageService: MessageService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.messageService.getSubject().subscribe( data => {
      this.message = data;
    });
  }

  loggedIn(): boolean{
    return this.authService.loggedIn();
  }

  logout(): void{
    this.authService.logout();
  }
}
