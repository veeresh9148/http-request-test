import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userData1 = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    useremail: new FormControl('', [Validators.required, Validators.email]),
    contactno: new FormControl('', [Validators.required]),
  });
  constructor(
    private userCreate: HttpServiceService,
    private toastr: ToastrService
  ) {}
  onAddUserhandler() {
    //console.log(this.userData1.value);
    this.userCreate.onUserCreate(this.userData1.value);
    //alert('User has been Added');
    this.toastr.success('User has been Added');
  }
}
