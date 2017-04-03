import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./news/home/home.component";
import {AdminComponent} from "./news/admin/admin.component";
import {RedactorComponent} from "./news/redactor/redactor.component";
import {AuthorComponent} from "./news/author/author.component";
import {NewsDetailsComponent} from "./news/news-details/news-details";

export const APP_ROUTS = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'redactor', component: RedactorComponent},
    {path: 'author', component: AuthorComponent},
    {path: 'newsDetails/:id', component: NewsDetailsComponent}

];
