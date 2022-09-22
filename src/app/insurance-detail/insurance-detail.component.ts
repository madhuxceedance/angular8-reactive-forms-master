import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-insurance-detail',
  templateUrl: './insurance-detail.component.html',
  styleUrls: ['./insurance-detail.component.css']
})
export class InsuranceDetailComponent implements OnInit {
  form: FormGroup;
  constructor() { }
  displayedColumns = [ 'title']
  ngOnInit() {
  }

}
