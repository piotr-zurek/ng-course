import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
 private innerText: string;

  @Input()
  set text(value: string) {
    this.innerText = value + '-suffix';
  }

  get text() {
    return this.innerText;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
