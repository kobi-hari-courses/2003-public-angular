import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.background-color')
  bg: string = 'rgba(0, 255, 255, 0.25)';

  @HostListener('mouseenter')
  start() {
    this.bg = 'rgba(0, 255, 255, 1)';
  }

  @HostListener('mouseleave')
  stop() {
    this.bg = 'rgba(0, 255, 255, 0.25)';
  }


  ngOnInit(): void {
    // this.elem.nativeElement.style.backgroundColor = 'yellow';

    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'lime');

  }

}
