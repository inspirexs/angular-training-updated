import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subroute2',
  templateUrl: './subroute2.component.html',
  styleUrls: ['./subroute2.component.css']
})
export class Subroute2Component implements OnInit {
  pathParam: string;
  queryParamName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pathParam = params['id'];
    });

    this.route.queryParams.subscribe(params => {
      this.queryParamName = params['name'];
    });
  }

}
