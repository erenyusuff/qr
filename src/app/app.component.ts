import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  departments: any = ['Pilotluk','Mekanik','Tasarım']
  available_times: any = ['0-1 Saat','1-2 Saat','2-3 Saat','3 Saat ve Üzeri']
 form: FormGroup = this.fb.group( {
   name: ['', Validators.required],
   surname: ['', Validators.required],
   class: ['', Validators.required],
   email: ['', Validators.required,Validators.email],
   phone_number: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
   department: ['', Validators.required],
   experience: ['', Validators.required],
   available_time: ['', Validators.required],
 })
  constructor(private fb: FormBuilder) {}

 async send(){
   console.log('qwe')
   emailjs.init('jA57RRSFZKW_ovFsh')
   let response = await emailjs.send('service_1u2y2je','template_owgxv9m', {
     name: this.form.value.name,
     surname: this.form.value.surname,
     class: this.form.value.class,
     email: this.form.value.email,
     phone_number: this.form.value.phone_number,
     department: this.form.value.department,
     experience: this.form.value.experience,
     available_time: this.form.value.available_time
   })

   alert('Başvuru talebiniz alınmıştır.')
   this.form.reset()
}
  get m(){
    return this.form.controls;
  }
}


