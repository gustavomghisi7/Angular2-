import { Component, OnInit } from '@angular/core';
import { People } from './People';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  // Two-way data binding
  nome: string = 'abc';

  pessoa: People = {
    nome: 'def',
    idade: 20
  }

  constructor() { }

  ngOnInit() {
  }

}
