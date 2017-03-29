import {Component, Input, OnInit} from '@angular/core';
import User from "../../model/user.model";

@Component({
    selector: 'edit-user',
    templateUrl: 'user-edit.template.html'
})
export class UserEditComponent implements OnInit {

    @Input() user: User;

    constructor() { }

    ngOnInit() { }

}