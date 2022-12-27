import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'AddUser', pathMatch: 'full' },
  { path: 'AddUser', component: AddUserComponent },
  { path: 'UserList', component: UserListComponent },
  // {
  //   path: 'UserList/',
  //   children: [{ path: 'edit/:id', component: UserListComponent }],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
