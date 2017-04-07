import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import News from "../model/news.model";
import {CurrentUserService} from "./current-user.service";
import {constant} from "../../app.constatnts";

@Injectable()
export default class NewsService {

    constructor(private http: Http, private currentUserService: CurrentUserService) {
    }

    loadApprovedNews(): Observable<News[]> {
        return this.http.get(constant.NEWS_ALL)
            .map((response: Response) => response.json());
    };

    loadNewsToApproving(): Observable<News[]> {
        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});
        return this.http.get(constant.NEWS_FOR_APPROVING, options)
            .map((response: Response) => response.json());
    };

    loadNewsDetails(id: number): Observable<News> {
        return this.http.get(constant.NEWS_DETAILS + id)
            .map((response: Response) => response.json());
    };

    update(news: News): Observable<News> {

        news.lastEdit = new Date();

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        console.log("Update run, news id to update: " + news.id + " news title: " + news.title);
        return this.http.put(constant.NEWS_URL, news, options)
            .map((response: Response) => response.json());
    }

    save(news: News): Observable<News> {

        news.createdBy = this.currentUserService.get().username;

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        return this.http.post(constant.NEWS_URL, news, options)
            .map((response: Response) => response.json());
    }

    delete(id: number): Observable<Response> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        return this.http.delete(constant.NEWS_URL + "/" + id, options);
    }
}