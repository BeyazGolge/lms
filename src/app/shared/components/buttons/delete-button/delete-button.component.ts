import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-delete-button",
    templateUrl: "./delete-button.component.html",
    styleUrls: ["./delete-button.component.css"]
})

export class DeleteButtonComponent implements OnInit {
    @Input() text: string = "";
    @Input() clickHandler!: () => void;
    constructor() {}

    ngOnInit(): void {

    }
}