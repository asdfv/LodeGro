import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class TokenService {

    jwtHelper: JwtHelper = new JwtHelper();

    getScopes(token: string): string[] {

            return this.jwtHelper.decodeToken(token).scopes;
    }
}