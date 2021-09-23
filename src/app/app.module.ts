import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { ColorCircleModule } from 'ngx-color/circle';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    ColorCircleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
