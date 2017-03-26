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
import {HashLocationStrategy} from "../../node_modules/@angular/common/src/location/hash_location_strategy";
import {LocationStrategy} from "../../node_modules/@angular/common/src/location/location_strategy";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(APP_ROUTS)
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AdminComponent,
        RedactorComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthenticationGuard,
        AuthenticationService,
        NewsService,
        CanViewService
    ]
})
export class AppModule {

}
