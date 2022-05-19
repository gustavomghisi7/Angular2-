import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    console.log(this.constructor);
  }

  ngOnChanges(){
    console.log(this.ngOnChanges);
  };

  ngDoCheck(){
    console.log(this.ngDoCheck);
  };
  
  ngAfterContentInit(){
    console.log(this.ngAfterContentInit);
  };
  
  ngAfterContentChecked(){
    console.log(this.ngAfterContentChecked);
  };

  ngAfterViewInit(){
    console.log(this.ngAfterViewInit);
  };
  
  ngAfterViewChecked(){
    console.log(this.ngAfterViewChecked);
  };
  
  ngOnDestroy(){
    console.log(this.ngOnDestroy);
  };

  ngOnInit():void {
    console.log(this.ngOnInit);
  }

}
