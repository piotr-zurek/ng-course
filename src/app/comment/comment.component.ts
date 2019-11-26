import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() author: string;
  @Input() content: string;
  @Input() isImportant: boolean;

  constructor() { }

  ngOnInit() {
  }

}
