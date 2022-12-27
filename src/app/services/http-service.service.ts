import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { AsyncSubject, map, Observable } from 'rxjs';
import { Userlist } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  allUser = [];
  onUserCreate(users) {
    this.http
      .post(
        'https://usermanagement-a601a-default-rtdb.firebaseio.com/users.json',
        users
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  observer = new Observable();
  onUserList() {
    this.observer = this.http
      .get<{ [key: string]: Userlist }>(
        'https://usermanagement-a601a-default-rtdb.firebaseio.com/users.json'
      )
      .pipe(
        map((res) => {
          let user = [];
          console.log(user);
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              user.push({ ...res[key], id: key });
            }
          }
          return user;
        })
      );
    // this.observer.subscribe((res) => {
    //   console.log(res);
    // });
  }
  onDeletedUser(id: string) {
    this.http
      .delete(
        'https://usermanagement-a601a-default-rtdb.firebaseio.com/users/' +
          id +
          '.json'
      )
      .subscribe();
  }

  onUserEdit(id, data) {
    this.http
      .put(
        'https://usermanagement-a601a-default-rtdb.firebaseio.com/users/' +
          id +
          '.json',
        data
      )
      .subscribe();
  }
}
