import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  formContact: FormGroup | any;
  selectedValue!: string;
  contryCodes: any;
  constructor(private formBuilder: FormBuilder,
              private contryCodesService: CountryCodesService) { }

  ngOnInit(): void {
    this.createForm(new Contact());
    this.contryCodes = this.contryCodesService.getContryCodes();
  }

  createForm(contac: Contact) {
    this.formContact = this.formBuilder.group({
      ddi: [55, [Validators.required]],
      ddd: ['11', [Validators.required]],
      phoneNumber: [contac.phoneNumber, [Validators.required]]
    })
  }

  onSubmit() {
    if (!this.formContact.valid) {
      return;
    }
    let ddi = this.formContact.controls['ddi'].value;
    let ddd = this.formContact.controls['ddd'].value;
    let phoneNumber = this.formContact.controls['phoneNumber'].value;
    let whatsappLink = `https://api.whatsapp.com/send?phone=${ddi}${ddd}${phoneNumber}`;
    window.open(whatsappLink);
    
  }
}
