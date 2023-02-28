import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-review',
  templateUrl: './data-binding-review.component.html',
  styleUrls: ['./data-binding-review.component.css']
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
}
