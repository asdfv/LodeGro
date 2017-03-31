import { Component, OnInit } from '@angular/core';
import News from "../model/news.model";

@Component({
    templateUrl: 'edit-news.template.html',
    selector: "edit-news"
})
export class EditNewsComponent implements OnInit {
    ngOnInit(): void {
        this.news = new News("some title", "some text");
    }


    private news: News;


    constructor() {

    }

}