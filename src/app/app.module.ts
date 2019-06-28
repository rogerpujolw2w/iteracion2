import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    CommentsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  exports: [MainComponent, CommentsComponent]
})
export class AppModule { }
