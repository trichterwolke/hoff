import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Page } from '../entities/page';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { read } from 'fs';

@Injectable()
export class PageService {

    constructor(private http: Http) {
        //        this.http.get('../data/content.json').subscribe(response => {
        //                var p = response.json();
        //                p.forEach(element => console.warn(element.Header));
        //            });



        //let p = <Page[]> JSON.parse('[{"Ordering":"1.0.0.0","Header":"Foo"},{"Ordering":"1.1.0.0","Header":"Foooooo"},{"Ordering":"1.1.0.1","Header":"Neue Seite"},{"Ordering":"1.1.1.0","Header":"SubSubSection"}]');
        // p.forEach(element => console.warn(element.Header));

    }

    public getPageList(): Observable<Page[]> {
        return new Observable<Page[]>(observer => 
            this.http.get('../data/content.json').subscribe(response => observer.next(<Page[]>response.json())));


        //return this.http.get('../data/content.json').pipe(response => <Page[]>response.json())

        ///return this.http.get('../data/content.json').subscribe(res => res.json())
        //return result;
    }
}

export const PAGES: Page[] = [
    { Ordering: "1.0.0.0", Header: "Foo", Content: null },
    { Ordering: "1.1.0.0", Header: "Foooooo", Content: null },
    { Ordering: "1.1.0.1", Header: "Neue Seite", Content: null },
    { Ordering: "1.1.1.0", Header: "SubSubSection", Content: null }];

export interface Foo {
    id: number;
}
