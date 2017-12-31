import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PageService  } from './services/page.service';


import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { PagesComponent } from './components/pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
