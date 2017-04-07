import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTS} from "./app.routs";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "./security/authentication.service";
import {HomeComponent} from "./news/home/home.component";
import {AdminComponent} from "./news/admin/admin.component";
import {RedactorComponent} from "./news/redactor/redactor.component";
import {CanViewService} from "./news/service/can-view.service";
import NewsService from "./news/service/news.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {CurrentUserService} from "./news/service/current-user.service";
import {UserService} from "./news/service/user.service";
import {UserEditComponent} from "./news/admin/user-edit/user-edit.component";
import {TokenService} from "./security/token.service";
import {AuthModule} from "./auth.module";
import {AuthorComponent} from "./news/author/author.component";
import {NewsEditComponent} from "./news/news-edit/news-edit.component";
import {NewsDetailsComponent} from "./news/news-details/news-details.component";
import {UserCreateComponent} from "./news/admin/user-create/user-create.component";
import {DatepickerModule} from "angular2-material-datepicker";

@NgModule({
    imports: [
        BrowserModule,
        DatepickerModule,
        FormsModule,
        HttpModule,
        AuthModule,
        RouterModule.forRoot(APP_ROUTS)
    ],
    declarations: [
        AppComponent,
        AdminComponent,
        AuthorComponent,
        LoginComponent,
        HomeComponent,
        NewsEditComponent,
        NewsDetailsComponent,
        RedactorComponent,
        UserEditComponent,
        UserCreateComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        UserService,
        AuthenticationService,
        NewsService,
        CanViewService,
        CurrentUserService,
        TokenService,
    ]
})
export class AppModule {

}
