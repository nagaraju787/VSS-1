import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigits]'
})
export class DigitsDirective {

  constructor(private input:ElementRef) { }
  @HostListener('keypress') keypress(){
    if(this.input.nativeElement.value.length+1>2){
      return false;
    }else{
      return true;
    }
  }
}
