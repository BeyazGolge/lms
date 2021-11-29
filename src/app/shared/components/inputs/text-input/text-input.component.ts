import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() placeholdertext:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
