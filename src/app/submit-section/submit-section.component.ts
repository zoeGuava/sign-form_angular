import { Component, OnInit, Input } from '@angular/core';
import { INPUT_DATA } from '../form-data';
// import { InputSpec } from '../form-spec';

@Component({
  selector: 'app-submit-section',
  templateUrl: './submit-section.component.html',
})

export class SubmitSectionComponent implements OnInit {
  
  // @Input() input_data?: InputSpec[];

  constructor() {}
  
  ngOnInit(): void {}

  onSubmit(): void {
    console.log(INPUT_DATA)
    for(let i = 0; i < INPUT_DATA.length; i++) {
      let data = INPUT_DATA[i];
      if (data.value === "") {
        data.error = true;
      } else if (data.type === "email") {
        if(data.value.includes("@") === false) {
          data.errorMsg = "Looks like this is not an email"
          data.error = true;
        } else {
          data.error = false;
        }
      } else {
        data.error = false;
      }
    }
    console.log(INPUT_DATA)
  }
}