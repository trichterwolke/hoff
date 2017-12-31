import { Component, OnInit } from '@angular/core';

import { PageService } from '../../services/page.service';
import { Page } from '../../entities/page';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
    public pages: Page[];

    constructor(private pageService: PageService) { }

    ngOnInit() {
        this.pageService.getPageList().subscribe(p => this.pages = p);
    }
}
