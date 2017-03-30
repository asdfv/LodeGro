import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class TokenService {

    jwtHelper: JwtHelper = new JwtHelper();

    getScopes(token: string): void {
        console.log(
            "decodeToken: " +
            JSON.stringify(this.jwtHelper.decodeToken(token).scopes) + "\ngetTokenExpirationDate: " +
            this.jwtHelper.getTokenExpirationDate(token) + "\nisTokenExpired: " +
            this.jwtHelper.isTokenExpired(token)
        );
    }
}