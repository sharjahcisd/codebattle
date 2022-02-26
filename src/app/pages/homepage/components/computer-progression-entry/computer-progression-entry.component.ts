import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-progression-entry',
  templateUrl: './computer-progression-entry.component.html',
  styleUrls: ['./computer-progression-entry.component.scss']
})
export class ComputerProgressionEntryComponent implements OnInit {

  @Input()
  separation: number = 1;

  @Input()
  computerImage?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
