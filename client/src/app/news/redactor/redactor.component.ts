import {Component} from "@angular/core";
import NewsService from "../service/news.service";
import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";
import News from "../model/news.model";

@Component({
    templateUrl: "./redactor.template.html"
})
export class RedactorComponent implements OnInit {

    constructor(private newsService: NewsService) {
    }

    private newsList: News[] = [];
    private loadning = true;

    ngOnInit(): void {
        this.newsService.loadNewsToApproving().subscribe(
            (data: News[]) => {
                this.newsList = data;
                this.loadning = false;
            }
        );
    }

}