import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';
import { Contact } from '../model/contact.model';
import { saveAs} from 'file-saver';
@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  formContact: FormGroup | any;
  contryCodes: any;
  constructor(private formBuilder: FormBuilder,
              private contryCodesService: CountryCodesService) { }

  ngOnInit(): void {
    this.createForm(new Contact());
    this.contryCodes = this.contryCodesService.getContryCodes();
  }
  createForm(contac: Contact) {
    this.formContact = this.formBuilder.group({
      ddi: [55, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      ddd: ['11', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      phoneNumber: [contac.phoneNumber, [Validators.required,  Validators.pattern("^[0-9]*$")]]
    })
  }

  getCountryInfos(){
    let country_phone = this.formContact.controls['ddi'].value;
    let country = this.contryCodes.filter((item: { phone_code: any; }) => item?.phone_code == country_phone);
    console.log(country);
    return country;
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
