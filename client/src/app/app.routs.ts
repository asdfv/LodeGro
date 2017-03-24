import {LoginComponent} from "./login/login.component";
import {AuthenticationGuard} from "./security/authentication.guard";
import {HomeComponent} from "./news/home/home.component";
import {AdminComponent} from "./news/admin/admin.component";
import {RedactorComponent} from "./news/redactor/redactor.component";

export const APP_ROUTS = [
    {path: '', component: LoginComponent, canActivate: [AuthenticationGuard]},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'redactor', component: RedactorComponent}
];
