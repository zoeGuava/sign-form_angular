import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html"
})

export class TextFieldComponent implements OnInit {

  title: String = 'Learn to code by watching others';
  describe: String = 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.';

  constructor() {}
  
  ngOnInit(): void {}
}