import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import User from "../model/user.model";
import {Headers, Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import {constant} from "../../app.constatnts";
import {CurrentUserService} from "./current-user.service";

@Injectable()
export class UserService {

    constructor(private http: Http, private currentUserService: CurrentUserService) {
        console.log("Token:" + this.currentUserService.get().token);

    };

    loadUserByUsername(username: string): Observable<User> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        return this.http.get(constant.USER_URL + username, options)
            .map((response: Response) => response.json());
    };

    loadAllUsers(): Observable<User[]> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        return this.http.get(constant.LOAD_ALL_USERS_URL, options)
            .map((response: Response) => response.json());
    };

    getRoles(user: User): string[] {
        let authorities: Object[] = user.authorities;
        let stringArrayRoles: string[] = [];

        authorities.forEach((authority, index, authorities) =>
            stringArrayRoles.push(JSON.parse(JSON.stringify(authority)).name));
        return stringArrayRoles;
    }

    update(user: User): Observable<User> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        console.log("Update run, user to update: " + JSON.stringify(user));
        return this.http.put(constant.USER_URL, user, options)
            .map((response: Response) => response.json());
    }

    save(user: User): Observable<User> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        console.log("Save run, user to save: " + JSON.stringify(user));
        return this.http.post(constant.USER_URL, user, options)
            .map((response: Response) => response.json());
    }

    delete(id: number): Observable<Response> {

        let headers = new Headers({'Authorization': this.currentUserService.get().token});
        let options = new RequestOptions({headers: headers});

        return this.http.delete(constant.USER_URL + "/" + id, options);
    }

}