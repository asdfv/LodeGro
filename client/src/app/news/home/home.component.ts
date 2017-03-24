import {Component, OnInit} from "@angular/core";
import NewsService from "../service/news.service";
import {CanViewService} from "../service/can-view.service";
import News from "../model/news.model";

@Component({
    templateUrl: "./home.template.html"
})
export class HomeComponent implements OnInit {

    constructor(private newsService: NewsService, private canViewService: CanViewService) {
    };

    newsList: News[];

    print(): void {
        this.canViewService.printUser();
    }

    ngOnInit(): void {
        this.print();
        this.newsService.loadNews().subscribe(
            (data: News[]) => this.newsList = data
        );
    }
}