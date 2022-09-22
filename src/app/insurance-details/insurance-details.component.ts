import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { PersonService } from '../authorize-person/person.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styles: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  insuredCtrl = new FormControl();
  filteredinsureds: Observable<string[]>;
  insureds: string[] = ['Bussiness item'];
  allinsureds: string[] = ['Money', 'Stock item', 'Stock in trade'];

  @ViewChild('insuredInput', { static: true }) insuredInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: true }) matAutocomplete: MatAutocomplete;

  SunInsuredArray: any = ['$20,0000', '$30,0008', '$50,9999'];
  ExcessArray: any = ['$200', '$3008', '$508'];
  constructor(public fb: FormBuilder, private dataService: PersonService) {
    this.filteredinsureds = this.insuredCtrl.valueChanges.pipe(
      startWith(null),
      map((insured: string | null) => insured ? this._filter(insured) : this.allinsureds.slice()));
  }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      startdate: ['', [Validators.required]],
      prefered: '',
      SumInsured: [''],
      excess: [''],
      insuredCtrl: [],
      unit: '',
      bussiness: ''

    })
  }
  displayedColumns = ['name', 'phoneNumber', 'email'];

  /* Date */
  date(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('startdate').setValue(convertDate, {
      onlyself: true
    })
  }


  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {

    this.myForm.patchValue({
      insuredCtrl: this.insureds,
      
    });
   // console.log(this.insureds);
    console.log(this.myForm.value)
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our insured
    if (value) {
      this.insureds.push(value);
    }

    // Clear the input value
    //event.chipInput!.clear();

    this.insuredCtrl.setValue(null);
  }

  remove(insured: string): void {
    const index = this.insureds.indexOf(insured);

    if (index >= 0) {
      this.insureds.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.insureds.push(event.option.viewValue);
    this.insuredInput.nativeElement.value = '';
    this.insuredCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allinsureds.filter(insured => insured.toLowerCase().indexOf(filterValue) === 0);
  }

}
