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
      isImportant: true,
      date: new Date('2019-01-01')
    },
    {
      author: 'Peter Parker',
      content: 'HELLLOOO!',
      isImportant: false,
      date: new Date('2019-01-08')
    },
    {
      author: 'Walter White',
      content: 'Im Heisenberg',
      isImportant: false,
      date: new Date('2019-01-12')
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
