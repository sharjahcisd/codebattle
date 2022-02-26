import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartwatch',
  templateUrl: './smartwatch.component.html',
  styleUrls: ['./smartwatch.component.scss']
})
export class SmartwatchComponent implements OnInit {

  selectedItem: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  select(item: number) {
    this.selectedItem = item;
  }

}
