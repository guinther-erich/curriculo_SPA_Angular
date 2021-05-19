import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;

}
