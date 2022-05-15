import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';
import { Contact } from '../model/contact.model';
import { saveAs} from 'file-saver';
import { GoogleAnalyticsService } from '../../../shared/services/google-analytics/google-analytics-service.service'

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  formContact: FormGroup | any;
  contryCodes: any;
  constructor(private formBuilder: FormBuilder,
              private contryCodesService: CountryCodesService,
              private googleAnalyticsService: GoogleAnalyticsService ) { }

  ngOnInit(): void {
    this.createForm(new Contact());
    this.contryCodes = this.contryCodesService.getContryCodes();
    this.onFormChanges();
  }
  createForm(contac: Contact) {
    this.formContact = this.formBuilder.group({
      ddi: [55, [Validators.required,  Validators.pattern("^[0-9]*$")]],
      ddd: ['11', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      phoneNumber: [contac.phoneNumber, [Validators.required,  Validators.pattern("^[0-9]*$")]]
    })
  }

  onFormChanges(){
    this.formContact.valueChanges.subscribe((value: any) => {
      const phoneNumber = value['phoneNumber'];
      const isBrazil = value['ddi'] == 55;
      const isnum = /^\d+$/.test(phoneNumber);
      if(isnum && phoneNumber.length > 9 && isBrazil){
        console.log(phoneNumber);
        const ddd = phoneNumber.substring(0,2);
        const normalizedPhoneNumber = phoneNumber.slice(2);
        this.formContact.controls['phoneNumber'].setValue(normalizedPhoneNumber);
        this.formContact.controls['ddd'].setValue(ddd);
      }
    });
  }

  getCountryInfos(){
    let country_phone = this.formContact.controls['ddi'].value;
    let country = this.contryCodes.filter((item: { phone_code: any; }) => item?.phone_code == country_phone);
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

    this.googleAnalyticsService.eventEmitter("open_whats_link", "link", "form_contact", "click", 10);

    window.open(whatsappLink);
  }
}
