export default class User {
    id: number;
    username: string;
    authorities: string[];
    token: string;

    constructor(id: number, username: string, authorities: string[], token: string) {
        this.id = id;
        this.username = username;
        this.authorities = authorities;
        this.token = token;
    }
}
