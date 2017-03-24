import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../../security/authentication.service";
import News from "../model/news.model";

@Injectable()
export default class NewsService {

    private newsUrl: string = "/api/news/all";
    private adminUrl: string = "/api/news/admin";
    private redactorUrl: string = "/api/news/redactor";

    constructor(private http: Http,
                private authenticationService: AuthenticationService) {
    }

    loadNews(): Observable<News[]> {
        return this.http.get(this.newsUrl)
            .map((response: Response) => response.json());
    };

    loadAdmin(): Observable<string> {
        let headers = new Headers({'Authorization': this.authenticationService.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this.adminUrl, options)
            .map((response: Response) => response.text());
    };

    loadRedactor(): Observable<string> {
        let headers = new Headers({'Authorization': this.authenticationService.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this.redactorUrl, options)
            .map((response: Response) => response.text());
    };
}