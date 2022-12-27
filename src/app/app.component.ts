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
  ngOnInit() {
    this.http.onUserList();
  }
  onAddUserHandler() {
    this.route.navigate(['AddUser']);
  }
  onUserListHandler() {
    this.route.navigate(['UserList']);
  }
}
