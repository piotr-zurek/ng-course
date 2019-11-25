import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Output() press = new EventEmitter();

  constructor() {
    console.log('konstruktor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.text) {
      console.log('zmieniono tekst przycisku');
    }
  }

  onButtonPress() {
    this.press.emit();
  }

}
