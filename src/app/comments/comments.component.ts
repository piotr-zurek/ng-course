import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments = [
    {
      author: 'John Doe',
      content: 'Hello World'
    },
    {
      author: 'Peter Parker',
      content: 'HELLLOOO!'
    },
    {
      author: 'Walter White',
      content: 'Im Heisenberg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
