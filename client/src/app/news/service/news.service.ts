import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import News from "../model/news.model";
import {CurrentUserService} from "./current-user.service";

@Injectable()
export default class NewsService {

    private newsUrl: string = "/api/news/all";
    private redactorUrl: string = "/api/news/redactor";
    // private adminUrl: string = "/api/news/admin";

    constructor(private http: Http, private currentUserService: CurrentUserService) {
    }

    loadNews(): Observable<News[]> {
        return this.http.get(this.newsUrl)
            .map((response: Response) => response.json());
    };

    // loadAdmin(): Observable<string> {
    //     let headers = new Headers({'Authorization': this.currentUserService.get().token});
    //     let options = new RequestOptions({headers: headers});
    //     return this.http.get(this.adminUrl, options)
    //         .map((response: Response) => response.text());
    // };
    //
    loadRedactor(): Observable<string> {
        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this.redactorUrl, options)
            .map((response: Response) => response.text());
    };
}