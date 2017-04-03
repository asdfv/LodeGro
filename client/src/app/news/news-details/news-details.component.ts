import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import News from "../model/news.model";
import NewsService from "../service/news.service";

@Component({
    templateUrl: 'news-details.template.html'
})
export class NewsDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private newsService: NewsService) {
    }

    private loading: boolean = true;
    private news: News = new News("Wait...", "Please wait...", "Wait epta!");

    ngOnInit() {
        let newsId: number = 0;
        this.route.params.subscribe(
            (params: Params) => {
                newsId = +params["id"];
                console.log("Catch param in NewsDetailsComponent: " + newsId);
            }
        );
        this.newsService.loadNewsDetails(newsId).subscribe(
            (data: News) => {
                console.log("loadNewsDetails started with id = " + newsId)
                this.news = data;
                console.log("loadNewsDetails: data is: " + JSON.stringify(data));
                this.loading = false;
            }
        );
    }
}
