import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const inputElement = this.elementRef.nativeElement as HTMLInputElement;
    const currentValue = inputElement.value;
    const sanitizedValue = currentValue.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
    inputElement.value = sanitizedValue;
  }

}
