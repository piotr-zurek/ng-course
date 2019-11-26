import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter/counter.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import localePLExtra from '@angular/common/locales/extra/pl';
import { LengthPipe } from './length.pipe';
import { SentenceCasePipe } from './sentence-case.pipe';

registerLocaleData(localePl, 'pl', localePLExtra);

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CounterComponent,
    CommentsComponent,
    CommentComponent,
    LengthPipe,
    SentenceCasePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
