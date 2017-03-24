import {Component, OnInit} from "@angular/core";
import {CanViewService} from "../service/can-view.service";
import NewsService from "../service/news.service";

@Component({
    templateUrl: "./redactor.template.html"
})
export class RedactorComponent implements OnInit {
    constructor(private canViewService: CanViewService, private newsService: NewsService){}

    private redactorText: string;

    ngOnInit(): void {
        this.canViewService.printUser();
        this.newsService.loadRedactor().subscribe(
            (data) => this.redactorText = data
        );
        console.log(this.redactorText);
    }

}