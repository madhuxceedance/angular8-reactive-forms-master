import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { PersonService } from '../authorize-person/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  
  PhoneArray: any = ['Home', 'Office', 'Phone'];
  constructor(public fb: FormBuilder, private dataService: PersonService, private _router: Router) { }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      Lastname: [''],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],     
      dob: ['', [Validators.required]],
      contact: this.fb.array([this.createContactFormGroup()])
    })
  }

  public addFormGroup() {
    const contact = this.myForm.get('contact') as FormArray
    contact.push(this.createContactFormGroup())
  }

  private createContactFormGroup(): FormGroup {
    return new FormGroup({
      'prefered': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required]),
      'phonenumber': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])

    })
  }

  /* Date */
  date(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }


  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {

    this.dataService.addPerson(this.myForm.value).subscribe(data => {
      this._router.navigateByUrl('/QuoteSummary'); 
    })
    //console.log(this.myForm.value)
  }

}
