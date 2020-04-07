import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHideable]'
})
export class HideableDirective {

  @Input('appHideable')
  delay: number;

  @HostBinding('style.display')
  display: string = '';

  @HostListener('click') 
  onClick() {
    this.display = 'none';

    let delayLength = 2000;
    if (typeof(this.delay) ==='number') {
      delayLength = this.delay;
    }

    setTimeout(() => {
      this.display = '';
    }, delayLength);
  }

  constructor() { }

}
