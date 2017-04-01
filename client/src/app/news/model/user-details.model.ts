export class UserDetails {
    id: number;
    username: string;
    enabled: boolean;
    authorities: Authority[];

    constructor(id: number, username: string, enabled: boolean, authorities: Authority[]) {
        this.id = id;
        this.username = username;
        this.enabled = enabled;
        this.authorities = authorities;
    }
}

export class Authority {
    id: number;
    name: string;
}