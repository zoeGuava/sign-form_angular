import { Component, OnInit } from '@angular/core';
import { INPUT_DATA, ERROR_STYLES } from '../form-data';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html'
})

export class FormFieldComponent implements OnInit {

  input_data = INPUT_DATA;
  error_styles = ERROR_STYLES;
  
  constructor() {}
  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.input_data);
    for(let i = 0; i < this.input_data.length; i++) {
      let data = this.input_data[i];
      if (data.value === "") {
        data.error = true;
      } else if (data.type === "email") {
        if(!data.value.includes("@")) {
          data.errorMsg = "Looks like this is not an email"
          data.error = true;
        } else {
          data.errorMsg = "Email cannot be empty"
          data.error = false;
        }
      } else {
          data.errorMsg = "Email cannot be empty"
          data.error = false;
      }
    }
    console.log(this.input_data);
  }
}