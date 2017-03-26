import {Injectable} from "@angular/core";
import User from "../model/user.model";

@Injectable()
export class CurrentUserService {

    get(): User {
        if(localStorage.getItem("currentUser"))
        return JSON.parse(localStorage.getItem("currentUser"));
        return new User("anon", null, null);
    }

    set(user: User): void {
        localStorage.setItem("currentUser", JSON.stringify(user));
    }

    remove(): void {
        localStorage.removeItem("currentUser");
    }

    isLogIn(): boolean {
        return this.get().username !== "anon";
    }
}
