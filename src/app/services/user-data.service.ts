import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { UserDate } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userList: AngularFireList<any>;
  selectedUser: UserDate = new UserDate();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.userList = this.firebase.list('userDate');
    return this.userList;
  }

  insertUserDate(userDate: UserDate,userKey: string) {
    this.userList.push({
      userKey: userKey,
      name: userDate.name,
      email: userDate.email,
      phoneNumber: userDate.phoneNumber,
      cidade: userDate.cidade
    });
  }

  updateUserDate(userDate: UserDate) {
    this.userList.update(userDate.$key, {
      name: userDate.name,
      email: userDate.email,
      phoneNumber: userDate.phoneNumber,
      cidade: userDate.cidade
    })
  }

  deleteUserDate($key: string){
    this.userList.remove($key);
  }
}
