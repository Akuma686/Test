import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  items = [
    [1, 1],
    [1],
    [1],
    [1],
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
