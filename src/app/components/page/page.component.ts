import { Component, OnInit } from '@angular/core';
import { Page } from '../../entities/page';
import { PageService } from '../../services/page.service';

@Component({
	selector: 'page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

	constructor(private pageService: PageService) { }

	ngOnInit() {
		this.pageService.getPageList()
	}
}
