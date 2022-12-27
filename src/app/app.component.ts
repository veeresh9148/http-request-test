import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'http-request';
  constructor(private route: Router, private http: HttpServiceService) {}
  addUserBtnStatus: boolean = true;
  listUserBtnStatus: boolean = false;
  ngOnInit() {
    this.http.onUserList();
  }
  onAddUserHandler() {
    this.addUserBtnStatus = true;
    this.listUserBtnStatus = false;
    this.route.navigate(['AddUser']);
  }
  onUserListHandler() {
    this.addUserBtnStatus = false;
    this.listUserBtnStatus = true;
    this.route.navigate(['UserList']);
  }
}
