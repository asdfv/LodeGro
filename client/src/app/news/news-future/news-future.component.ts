import {Component, OnInit} from "@angular/core";
import NewsService from "../service/news.service";
import News from "../model/news.model";

@Component({
    templateUrl: 'news-future.template.html'
})
export class NewsFutureComponent implements OnInit {

    private loading = true;

    constructor(private newsService: NewsService) {
    };

    newsList: News[] = [];

    ngOnInit(): void {
        this.newsService.loadFutureNews().subscribe(

            (data: News[]) => {
                this.newsList = data;
                this.loading = false;
            }
        );
    }
}
