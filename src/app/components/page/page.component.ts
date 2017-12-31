import { Component, OnInit } from '@angular/core';
import { Page } from '../../entities/page';
import { PageService } from '../../services/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

	constructor(private pageService: PageService,
		private route: ActivatedRoute, ) { }

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.pageService.getPage(params.get('index')).subscribe(res => {
				this.index = res.index.substring(0, 5);
				this.header = res.header;
				this.content = res.content;

				if (res.nextPage !== null) {
					this.nextPageIndex = res.nextPage.index;
					this.nextPageHeader = res.nextPage.header;
				}
				else {
					this.nextPageIndex = null;
					this.nextPageHeader = null;
				}

				if (res.previousPage !== null) {
					this.previousPageIndex = res.previousPage.header;
					this.previousPageHeader = res.previousPage.header;
				}
				else {
					this.previousPageIndex = null;
					this.previousPageHeader = null;
				}
			});
		});
	}

	public index: string;
	public header: string;
	public content: string;

	public nextPageIndex: string;
	public nextPageHeader: string;
	public previousPageIndex: string;
	public previousPageHeader: string;

}
