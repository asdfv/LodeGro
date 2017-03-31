import {LoginComponent} from "./login/login.component";
import {AuthenticationGuard} from "./security/authentication.guard";
import {HomeComponent} from "./news/home/home.component";
import {AdminComponent} from "./news/admin/admin.component";
import {RedactorComponent} from "./news/redactor/redactor.component";
import {AuthorComponent} from "./news/author/author.component";

export const APP_ROUTS = [
    {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'redactor', component: RedactorComponent},
    {path: 'author', component: AuthorComponent}
];
