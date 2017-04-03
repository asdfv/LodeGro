import {Component, OnInit} from "@angular/core";
import News from "../model/news.model";
import {ActivatedRoute, Params} from "@angular/router";
import NewsService from "../service/news.service";

@Component({
    templateUrl: 'news-edit.template.html',
    selector: "news-edit"
})
export class NewsEditComponent implements OnInit {
    constructor(private route: ActivatedRoute, private newsService: NewsService) {
    }

    private loading: boolean = true;
    private news: News = new News("Wait...", "Please wait...", "Wait epta!");
    private errorMessage: string = "";
    private successMessage: string = "";

    ngOnInit() {
        let newsId: number;
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

    updateOrSave(news: News, id: number): void {
        console.log("updateOrSave: id = " + id);
        id == null ? this.save(news) : this.update(news);
    }

    update(news: News) {
        this.loading = true;
        this.newsService.update(news).subscribe(
            data => {
                console.log("Successfully save/update: " + JSON.stringify(data));
                this.loading = false;
                this.successMessage = "Successfully update!";
            },
            error => this.logError(error)
        );
    }

    save(news: News) {
        this.loading = true;
        this.newsService.save(news).subscribe(
            data => {
                console.log("Successfully save: " + data.title);
                this.loading = false;
                this.successMessage = "Successfully saved!";
            },
            error => this.logError(error)
        );
    }

    logError(err) {
        this.loading = false;
        console.error('Error: ' + err);
        this.errorMessage = 'Error occurred =( ';
    }
}