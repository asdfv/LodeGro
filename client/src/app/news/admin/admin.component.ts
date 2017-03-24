import {Component, OnInit} from "@angular/core";
import NewsService from "../service/news.service";

@Component({
    templateUrl: "./admin.template.html"
})
export class AdminComponent implements OnInit {
    constructor(private newsService: NewsService) {
    };

    private adminText: string;


    ngOnInit(): void {
        this.newsService.loadAdmin().subscribe(
            (data) => this.adminText = data
        );
        console.log(this.adminText);
    }

}