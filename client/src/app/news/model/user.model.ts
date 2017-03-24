export default class User {
    username: string;
    authorities: string[];
    token: string;

    constructor(username: string, authorities: string[], token: string) {
        this.username = username;
        this.authorities = authorities;
        this.token = token;
    }
}