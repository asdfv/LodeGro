import {Injectable} from "@angular/core";
import User from "../model/user.model";
import {constant} from "../../app.constatnts";

@Injectable()
export class CurrentUserService {

    get(): User {
        if(localStorage.getItem(constant.SAVED_USER))
        return JSON.parse(localStorage.getItem(constant.SAVED_USER));
        return new User(0, constant.ANONYMOUS_USER, null, null);
    }

    set(user: User): void {
        localStorage.setItem(constant.SAVED_USER, JSON.stringify(user));
    }

    remove(): void {
        localStorage.removeItem(constant.SAVED_USER);
    }

    isLogIn(): boolean {
        return this.get().username !== constant.ANONYMOUS_USER;
    }
}