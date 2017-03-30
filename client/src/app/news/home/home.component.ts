import {Component, OnInit} from "@angular/core";
import NewsService from "../service/news.service";
import News from "../model/news.model";

@Component({
    templateUrl: "./home.template.html"
})
export class HomeComponent implements OnInit {

    constructor(private newsService: NewsService) {
    };

    newsList: News[];

    ngOnInit(): void {
        this.newsService.loadNewsForAll().subscribe(
            (data: News[]) => this.newsList = data
        );
    }
}