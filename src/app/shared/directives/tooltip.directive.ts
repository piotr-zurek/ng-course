import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit, AfterViewInit {
  @Input('appTooltip') text: string;

  private tooltipEl: HTMLDivElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    console.log('jestem!');
  }



  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouseenter');
    this.show();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('mouseleave');
    this.hide();
  }

  ngAfterViewInit(): void {
  }

  show() {
    const hostEl: HTMLElement = this.elementRef.nativeElement;
    this.tooltipEl = this.renderer.createElement('div');
    const textEl = this.renderer.createText(this.text);
    this.renderer.addClass(this.tooltipEl, 'tooltip');

    this.renderer.appendChild(this.tooltipEl, textEl);
    this.renderer.appendChild(hostEl, this.tooltipEl);
  }

  hide() {
    const hostEl: HTMLElement = this.elementRef.nativeElement;
    this.renderer.removeChild(hostEl, this.tooltipEl);
  }
}
