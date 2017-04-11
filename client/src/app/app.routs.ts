import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./news/home/home.component";
import {AdminComponent} from "./news/admin/admin.component";
import {RedactorComponent} from "./news/redactor/redactor.component";
import {AuthorComponent} from "./news/author/author.component";
import {NewsDetailsComponent} from "./news/news-details/news-details.component";
import {NewsEditComponent} from "./news/news-edit/news-edit.component";
import {UserCreateComponent} from "./news/admin/user-create/user-create.component";
import {UserEditComponent} from "./news/admin/user-edit/user-edit.component";
import {NewsFutureComponent} from "./news/news-future/news-future.component";

export const APP_ROUTS = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'redactor', component: RedactorComponent},
    {path: 'author', component: AuthorComponent},
    {path: 'newsDetails/:id', component: NewsDetailsComponent},
    {path: 'newsEdit/:id', component: NewsEditComponent},
    {path: 'userCreate', component: UserCreateComponent},
    {path: 'userEdit/:username', component: UserEditComponent},
    {path: 'newsFuture', component: NewsFutureComponent}
];
