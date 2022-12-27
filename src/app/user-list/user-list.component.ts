import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(
    private http: HttpServiceService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private tostr: ToastrService
  ) {
    // this.http.onUserList();
  }

  userList;
  user;
  p: any;
  isEdit = true;
  ngOnInit() {
    this.http.observer.subscribe((resp) => {
      console.log(resp);
      this.userList = resp;
    });

    // this.activatedRoute.data.subscribe((e) => console.log(e));
  }

  userDetails;
  editUserid;
  onEditUserhandler(id) {
    this.isEdit = false;
    this.editUserid = id;

    //console.log(id);
    this.userDetails = this.userList.filter((uid) => uid.id == this.editUserid);
    // this.route.navigate(['/edit/' + id], {
    //   queryParams: { edit: true },
    // });
    //console.log(this.userDetails);
  }
  onDeleteUser(id: string) {
    this.http.onDeletedUser(id);
    // alert('User is deleted');
    this.tostr.success('User is deleted');
  }
  onEditUserSubmitHandler(data) {
    this.isEdit = true;
    //console.log(data.value);
    this.http.onUserEdit(this.editUserid, data.value);

    //alert('User data is updated');
    this.tostr.success('User data is updated');
  }
}
