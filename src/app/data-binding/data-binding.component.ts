import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']

  /* Aplicando style inline, segundo style garden é OK você 
  fazer desse jeito quando for somente um bloco de estilo */
  styles: [
    `
      .highlight {
        background-color: red;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent {

  // Interpolation
  url: string = 'http://google.com';
  cursoAngular: boolean = true;
  
  getValor(){
    return 2;
  }
  
  getCurtirCurso(){
    return true;
  }
  

  // Property Binding
  urlImagem = 'http://lorempixel.com.br/500/400/?1';


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


  // Input Properties
  nomeDoCurso: string = 'Angular 2';


  // Output Properties
  valorInicial = 15;

  onMudouValor(evento: any) {
    console.log(evento.novoValor)
  }

}
