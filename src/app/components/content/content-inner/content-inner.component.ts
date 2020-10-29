import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-inner',
  templateUrl: './content-inner.component.html',
  styleUrls: ['./content-inner.component.css']
})
export class ContentInnerComponent implements OnInit {
  @Input('name') name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
