import { Directive, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: 'input[type="text"][appNospace]'
})
export class NospaceDirective implements OnInit {
  private lastValidValue: string;

  @HostListener('input')
  onInput() {
    this.validate(this.host.nativeElement);
  }

  isValid(value: string): boolean {
    return !value.includes(' ');
  }

  validate(elem: any) {
    let val = elem.value;

    if (this.isValid(val)) {
      this.lastValidValue = val;
    } else {
      elem.value = this.lastValidValue;
    }
  }

  constructor(private host: ElementRef) { }

  ngOnInit(): void {
    this.lastValidValue = '';
    this.validate(this.host.nativeElement);
  }



}
