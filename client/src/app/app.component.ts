import {Component} from "@angular/core";
import {CanViewService} from "./news/service/can-view.service";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor(private canViewService: CanViewService) {
    };

    title: string = "Lode News";

    isAdm(): boolean {
        return this.canViewService.isAdmin();
    }

    isRed(): boolean {
        return this.canViewService.isRedactor();
    }

}
