import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {constant} from "../app.constatnts";
import User from "../news/model/user.model";
import {CurrentUserService} from "../news/service/current-user.service";

@Injectable()
export class AuthenticationService {

    private LOGIN_URL: string = constant.LOGIN_URL;

    constructor(private http: Http, private currentUserService: CurrentUserService) {

    }

    login(username: string, password: string): Observable<boolean> {
        const body = JSON.stringify({username: username, password: password});
        const options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

        return this.http.post(this.LOGIN_URL, body, options)
            .map((response: Response) => {

                let id = Number(response.headers.get("id"));
                let token = response.headers.get("Authorization").slice(7);
                let stringAuthorities: string = response.headers.get("Authorities");
                let authorities: string[] = stringAuthorities.split(",");

                authorities.forEach((authority, index, authorities) => console.log(index + " authority: " + authority));

                if (token) {
                    let user = new User(id, username, authorities, token);
                    this.currentUserService.set(user);
                    let currentUser = this.currentUserService.get();
                    console.log("Saved to storage: " + currentUser.username + " with roles: " + currentUser.authorities + " and token: " + currentUser.token);
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error: any) => {
                return Observable.throw(error)
            });
    }

    logout(): void {
        this.currentUserService.remove();
    }
}
