import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Page } from '../entities/page';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PageService {

    constructor(private http: Http) { }

    public getPages(): Observable<Page[]> {
        return new Observable<Page[]>(observer =>
            this.http.get('../data/list.json').subscribe(response => observer.next(<Page[]>response.json())));
    }

    public getPage(index: string): Observable<Page> {
        return new Observable<Page>(observer =>
            this.http.get('../data/pages/' + index + '.json').subscribe(response => observer.next(<Page>response.json())));
    }
}
