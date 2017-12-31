import { Injectable } from '@angular/core';
import { Page } from '../entities/page';

@Injectable()
export class PageService {

    constructor() { }

    public getPageList(): Promise<Page[]> {
        return new Promise((resolve, reject) => resolve(PAGES));
    }
}

export const PAGES: Page[] = [
    { ordering: "1.0.0.0", header: "Foo", content: null },
    { ordering: "1.1.0.0", header: "Foooooo", content: null },
    { ordering: "1.1.0.1", header: "Neue Seite", content: null },
    { ordering: "1.1.1.0", header: "SubSubSection", content: null }];