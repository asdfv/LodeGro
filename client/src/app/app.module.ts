import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTS} from "./app.routs";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {AuthenticationGuard} from "./security/authentication.guard";
import {AuthenticationService} from "./security/authentication.service";
import {HomeComponent} from "./news/home/home.component";
import {AdminComponent} from "./news/admin/admin.component";
import {RedactorComponent} from "./news/redactor/redactor.component";
import {CanViewService} from "./news/service/can-view.service";
import NewsService from "./news/service/news.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {CurrentUserService} from "./news/service/current-user.service";
import {AdminService} from "./news/service/admin.service";
import {UserEditComponent} from "./news/admin/edit-user/user-edit.component";
import {TokenService} from "./security/token.service";
import {AuthModule} from "./auth.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule,
        RouterModule.forRoot(APP_ROUTS)
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AdminComponent,
        RedactorComponent,
        UserEditComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AdminService,
        AuthenticationGuard,
        AuthenticationService,
        NewsService,
        CanViewService,
        CurrentUserService,
        TokenService
    ]
})
export class AppModule {

}
