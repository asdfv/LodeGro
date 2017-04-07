import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import News from "../model/news.model";
import NewsService from "../service/news.service";
import {CanViewService} from "../service/can-view.service";

@Component({
    templateUrl: 'news-details.template.html'
})
export class NewsDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private newsService: NewsService,
                private canViewService: CanViewService) {
    }

    private loading: boolean = true;
    private news: News = new News("", "", "");

    ngOnInit() {
        let newsId: number = 0;
        this.route.params.subscribe(
            (params: Params) => {
                newsId = +params["id"];
            }
        );
        this.newsService.loadNewsDetails(newsId).subscribe(
            (data: News) => {
                this.news = data;
                this.loading = false;
            }
        );
    }

    canEdit(): boolean {
        return (this.canViewService.isRedactor());
    }
}
