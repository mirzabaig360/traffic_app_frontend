import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css'],
})
export class ScoreListComponent implements OnInit {
  listItems: any = null;
  constructor() {}

  ngOnInit(): void {
    this.listItems = [
      {
        name: 'Lauren Vickers',
        target: 90,
        actual: 95,
        points: 69,
      },
      {
        name: 'Shazia Darby',
        target: 80,
        actual: 88,
        points: 26,
      },
      {
        name: 'Zara Cain',
        target: 85,
        actual: 81,
        points: 124,
      },
      {
        name: 'Clair Newton',
        target: 80,
        actual: 22,
        points: 82,
      },
      {
        name: 'April Bruce Kieran',
        target: 90,
        actual: 92,
        points: 26,
      },
    ];
  }
}
