import {Component, OnInit} from "@angular/core";
import {CanViewService} from "./news/service/can-view.service";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit{
    title: string = "Lode News";

    constructor(private canViewService: CanViewService) {
    };

    ngOnInit(): void {
        this.print();
    }

    print(): void {
        this.canViewService.printUser();
    }

}