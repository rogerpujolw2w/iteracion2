import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { SmartTruncatePipe } from './shared/pipes/smart-truncate.pipe';

@NgModule({
  declarations: [
    CommentsComponent,
    MainComponent,
    CapitalizePipe,
    SmartTruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  exports: [MainComponent, CommentsComponent, CapitalizePipe, SmartTruncatePipe]
})
export class AppModule { }
