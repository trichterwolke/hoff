import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PageService  } from './services/page.service';


import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { PagesComponent } from './components/pages/pages.component';
import { MarkdownModule } from 'angular2-markdown';
import { QuestionComponent } from './components/question/question.component';

const appRoutes: Routes = [
  { path: 'pages', component: PagesComponent },  
  { path: 'page',
  redirectTo: '/pages',
  pathMatch: 'full'
},
  { path: 'page/:index', component: PageComponent },
  { path: '',
    redirectTo: '/pages',
    pathMatch: 'full'
  },
  /*{ path: '**', component: PageNotFoundComponent }*/
];


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PagesComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot(),
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
