import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {constant} from "../app.constatnts";

@Injectable()
export class AuthenticationService {
    public token: string;
    public username: string = "anon";
    public authorities: string;
    private LOGIN_URL: string = constant.LOGIN_URL;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            this.token = currentUser.token;
            this.username = currentUser.username;
        }
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.LOGIN_URL, JSON.stringify({username: username, password: password}))
            .map((response: Response) => {
                // login successful if there"s a jwt token in the response header
                let token = response.headers.get("Authorization").slice(7);
                let authorities = response.headers.get("Authorities");
                if (token) {
                    // set token property
                    this.token = token;
                    this.username = username;
                    this.authorities = authorities;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem("currentUser", JSON.stringify({username: username, token: token, authorities: authorities}));
                    // return true to indicate successful login
                    return true;
                } else {
                    this.username = "anon";
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.username = "anon";
        localStorage.removeItem("currentUser");
    }
}