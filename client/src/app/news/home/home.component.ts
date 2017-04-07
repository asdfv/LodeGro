import {Component, OnInit} from "@angular/core";
import NewsService from "../service/news.service";
import News from "../model/news.model";
import {Router} from "@angular/router";

@Component({
    templateUrl: "./home.template.html",
    styleUrls: ["./home.style.css"]
})
export class HomeComponent implements OnInit {

    constructor(private newsService: NewsService) {
    };

    newsList: News[];

    ngOnInit(): void {
        this.newsService.loadApprovedNews().subscribe(

            (data: News[]) => {
                this.newsList = data
            }
        );
    }
}