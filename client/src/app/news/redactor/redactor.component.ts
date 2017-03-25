import {Component} from "@angular/core";
import NewsService from "../service/news.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Component({
    templateUrl: "./redactor.template.html"
})
export class RedactorComponent implements OnInit {
    constructor(private newsService: NewsService) {
    }

    private redactorText: string;

    ngOnInit(): void {
        this.newsService.loadRedactor().subscribe(
            (data) => this.redactorText = data
        );
    }

}