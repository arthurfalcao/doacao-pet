import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserDataService } from '../services/user-data.service';
import { UserDate } from '../services/user.model';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: UserDate [];
  constructor(public loginService: LoginService, private userDateService: UserDataService ) { }

  ngOnInit() {
    this.userDateService.getData();
    var x = this.userDateService.getData();
    x.snapshotChanges().subscribe(item =>{
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
      this.userDateService.insertUserDate(userForm.value);
    else
      this.userDateService.updateUserDate(userForm.value);
    this.resetForm(userForm);
  }

  onEdit(user: UserDate){
    this.userDateService.selectedUser = Object.assign({},user);
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null)
    userForm.reset();
    this.userDateService.selectedUser = {
      $key: null,
      name: '',
      email: '',
      phoneNumber: null,
      cidade: '',
    }
  }

  onDelete(key: string){
    if(confirm("Você realmente quer deletar estes dados?")==true){

      this.userDateService.deleteUserDate(key);
    }
  }



}
