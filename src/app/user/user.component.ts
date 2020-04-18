import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from '../services/login.service';
import { UserDataService } from '../services/user-data.service';
import { UserDate } from '../services/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  validadorButton = true;
  validadorForm = false;
  userList: UserDate[];
  userKey: string;
  constructor(
    public loginService: LoginService,
    private userDateService: UserDataService,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(item => {
      this.userKey = item.uid;
    });
  }

  ngOnInit() {
    this.userDateService.getData();
    var x = this.userDateService.getData();
    x.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.userList.push(y as UserDate);
      });
    });
  }

  onSubmit(userForm: NgForm) {
    if (userForm.value.$key == null)
      this.userDateService.insertUserDate(userForm.value, this.userKey);
    else this.userDateService.updateUserDate(userForm.value);
    this.resetForm(userForm);
    this.validadorForm = false;
  }

  onEdit(user: UserDate) {
    this.userDateService.selectedUser = Object.assign({}, user);
    this.validadorForm = true;
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null) userForm.reset();
    this.userDateService.selectedUser = {
      $key: null,
      name: '',
      email: '',
      phoneNumber: null,
      cidade: '',
      userKey: ''
    };
  }

  onDelete(key: string) {
    if (confirm('Você realmente quer deletar estes dados?') == true) {
      this.userDateService.deleteUserDate(key);
    }
  }

  validador() {
    this.validadorForm = true;
    this.validadorButton = false;
  }

  fecharForm() {
    this.validadorForm = false;
  }
}
