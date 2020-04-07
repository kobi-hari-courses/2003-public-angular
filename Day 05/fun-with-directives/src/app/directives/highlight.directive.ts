import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight], [hl], .hl'
})
export class HighlightDirective implements OnInit {

  _color: string;

  @Input('appHighlight')
  set color(value: string) {
    this._color = value;
    this.bg = `rgba(${this.color}, 0.25)`;
  }
  get color(): string {return this._color;}


  @Output()
  triggered = new EventEmitter<void>();


  @HostBinding('style.background-color')
  bg: string;

  @HostListener('mouseenter')
  start() {
    const clr = this._color ? this._color : '0, 255, 255';
    this.bg = `rgba(${clr}, 1)`;
    this.triggered.emit();
  }

  @HostListener('mouseleave')
  stop() {
    const clr = this._color ? this._color : '0, 255, 255';
    this.bg = `rgba(${clr}, 0.25)`
  }

  constructor(){
  }

  ngOnInit(): void {
    // this.elem.nativeElement.style.backgroundColor = 'yellow';

    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'lime');

  }

}
