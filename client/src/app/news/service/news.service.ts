import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import News from "../model/news.model";
import {CurrentUserService} from "./current-user.service";

@Injectable()
export default class NewsService {

    private newsUrl: string = "/api/news/all";
    private redactorUrl: string = "/api/news/redactor";
    private newsDetailsUrl: string = "/api/news/get";

    constructor(private http: Http, private currentUserService: CurrentUserService) {

    }

    loadApprovedNews(): Observable<News[]> {
        return this.http.get(this.newsUrl)
            .map((response: Response) => response.json());
    };

    loadNewsToApproving(): Observable<News[]> {
        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this.redactorUrl, options)
            .map((response: Response) => response.json());
    };

    loadNewsDetails(id: number): Observable<News> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let params = new URLSearchParams();
        params.set("id", String(id));
        let options = new RequestOptions({headers: headers, search: params});

        return this.http.get(this.newsDetailsUrl, options)
            .map((response: Response) => response.json());
    };
}