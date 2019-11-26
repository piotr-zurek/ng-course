import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  isLoading = true;
  comments = [
    {
      author: 'John Doe',
      content: 'Hello World',
      isImportant: true
    },
    {
      author: 'Peter Parker',
      content: 'HELLLOOO!',
      isImportant: false
    },
    {
      author: 'Walter White',
      content: 'Im Heisenberg',
      isImportant: false
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }

}
