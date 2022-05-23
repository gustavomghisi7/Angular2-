import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    console.log(this.constructor);
  }

  // antes e quando o valor do property-binding é atualizado
  ngOnChanges(){
    console.log(this.ngOnChanges);
  };

  // quando Component é inicializado
  ngOnInit():void {
    console.log(this.ngOnInit);
  }
  
  // a cada ciclo de verificação de mudanças
  ngDoCheck(){
    console.log(this.ngDoCheck);
  };
  
  // depois de inserir o conteúdo externo na view
  ngAfterContentInit(){
    console.log(this.ngAfterContentInit);
  };
  
  // a cada verificação de conteúdo inserido
  ngAfterContentChecked(){
    console.log(this.ngAfterContentChecked);
  };
  
  // a cada verificação de conteúdo / conteúdo filho
  ngAfterViewChecked(){
    console.log(this.ngAfterViewChecked);
  };

  // antes da diretiva/component ser destruído
  ngOnDestroy(){
    console.log(this.ngOnDestroy);
  };

}
