import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {constant} from "../app.constatnts";
import User from "../news/model/user.model";
import {map} from "../../../node_modules/rxjs/operator/map";
import {forEach} from "../../../node_modules/@angular/router/src/utils/collection";

@Injectable()
export class AuthenticationService {

    public user: User = new User("anon", null, null);

    private LOGIN_URL: string = constant.LOGIN_URL;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            this.user = new User(currentUser.username, currentUser.authoriries, currentUser.token);
        }
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.LOGIN_URL, JSON.stringify({username: username, password: password}))
            .map((response: Response) => {
                // login successful if there"s a jwt token in the response header
                let token = response.headers.get("Authorization").slice(7);

                let stringAuthorities: string = response.headers.get("Authorities");
                let authorities: string[] = stringAuthorities.split(",");

                authorities.forEach((authority, index, authorities) => console.log(index + " authority: " + authority));

                if (token) {
                    this.user = new User(username, authorities, token);

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem("currentUser", JSON.stringify({username: username, token: token, authorities: authorities}));
                    console.log(localStorage.getItem("currentUser"));
                    // return true to indicate successful login
                    return true;
                } else {
                    this.user.username = "anon";
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.user.username = "anon";
        this.user.authorities = null;
        this.user.token = null;
        localStorage.removeItem("currentUser");
    }
}