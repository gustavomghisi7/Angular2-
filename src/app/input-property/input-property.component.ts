import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // Declarando o Input property que vem de outro component
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
