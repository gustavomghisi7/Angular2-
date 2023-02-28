import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-review',
  templateUrl: './data-binding-review.component.html',
  //styleUrls: ['./data-binding.component.css']

  /*
    Aplicando style inline, segundo style garden é OK você 
    fazer desse jeito quando for somente um bloco de estilo
  */

  styles: [
    `
      .highlight {
        background-color: blue;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingReviewComponent {

  // Interpolation
  url: string = 'http://youtube.com';
  cursoAngular: boolean = true;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }



  // Property Binding
  urlImagem = 'http://lorempixel.com.br/400/200/nature/';



  // Event Binding
  botaoClicado() {
    alert('Botão clicado!');
  }

  valorAtual: string = '';

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  valorSalvo: string = '';

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  isMouseOver: boolean = false;

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }



}
