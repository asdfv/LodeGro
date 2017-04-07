import {Component, OnInit} from "@angular/core";
import News from "../model/news.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import NewsService from "../service/news.service";
import {CanViewService} from "../service/can-view.service";
import {Response} from "@angular/http";

@Component({
    templateUrl: 'news-edit.template.html',
    selector: "news-edit"
})
export class NewsEditComponent implements OnInit {
    constructor(private route: ActivatedRoute,
                private newsService: NewsService,
                private canViewService: CanViewService,
                private router: Router) {
    }

    private loading: boolean = true;
    private news: News = new News("", "", "");
    private errorMessage: string = "";
    private successMessage: string = "";

    ngOnInit() {
        let newsId: number;
        this.route.params.subscribe(
            (params: Params) => {
                newsId = +params["id"];
                if (!isNaN(newsId)) {
                    this.newsService.loadNewsDetails(newsId).subscribe(
                        (data: News) => {
                            data.startDate = new Date(data.startDate);
                            this.news = data;
                            this.loading = false;
                        }
                    );
                }
                this.loading = false;
            }
        );
    }

    isRedactor(): boolean {
        return this.canViewService.isRedactor();
    }

    updateOrSave(): void {
        this.news.id == undefined ? this.save(this.news) : this.update(this.news);
    }

    update(news: News) {
        this.loading = true;
        this.newsService.update(news).subscribe(
            data => {
                console.log("Successfully save/update: " + JSON.stringify(data));
                this.loading = false;
                this.successMessage = "Successfully update!";
                this.router.navigate(["/"]);
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
                this.router.navigate(["/"]);
            },
            error => this.logError(error)
        );
    }

    delete(id: number): void {
        this.loading = true;
        this.newsService.delete(id).subscribe(
            (response: Response) => {
                console.log("Deleting response status: " + response.status);
                this.loading = false;
                this.router.navigate(["/"]);
            },
            error => this.logError(error)
        )
    }

    logError(err) {
        this.loading = false;
        console.error('Error: ' + err);
        this.errorMessage = 'Error occurred =( ';
    }
}