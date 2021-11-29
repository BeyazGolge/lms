import {Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-update-button",
    templateUrl: ".update-button.component.html",
    styleUrls: ["./update-button.component.css"]
})

export class UpdateButtonComponent implements OnInit {
    @Input()  text: String = "";
    @Input() clickHandler!: () => void;
    
    constructor() {}

    ngOnInit():void {

    }
}