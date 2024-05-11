import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 form: FormGroup = this.fb.group({
   name: '',
   surname: '',
   class: '',
   department: '',
   experience: '',
   available_time: ''
 })
  constructor(private fb: FormBuilder) {}

 async send(){
   emailjs.init('jA57RRSFZKW_ovFsh')
   let response = await emailjs.send('service_1u2y2je','template_owgxv9m', {
     name: this.form.value.name,
     surname: this.form.value.surname,
     class: this.form.value.class,
     department: this.form.value.department,
     experience: this.form.value.experience,
     available_time: this.form.value.available_time
   })

   alert('Başvuru talebiniz alınmıştır.')
   this.form.reset()
}

}


