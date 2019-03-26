import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '../../../node_modules/@angular/router';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Component({
  selector: 'app-pets-register',
  templateUrl: './pets-register.component.html',
  styleUrls: ['./pets-register.component.css']
})
export class PetsRegisterComponent implements OnInit {

  userKey: string;
  constructor(private petService: PetService, public loginService: LoginService, private router: Router, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(item => {
      this.userKey = item.uid;
    });
   }
  
  ngOnInit() {
    this.petService.getData();
    this.resetForm();
  }

  onSubmit(petForm: NgForm) {
    if (petForm.value.$key == null)
      this.petService.insertPet(petForm.value,this.userKey);
    else
      this.petService.updatePet(petForm.value);
    this.resetForm(petForm);
    this.router.navigate(['/pets']);
    alert('Pet cadastrado');
  }

  resetForm(petForm?: NgForm) {
    if (petForm != null)
      petForm.reset();
    this.petService.selectedPet = {
      $key: null,
      tipo: '',
      raca: '',
      porte: '',
      idade: '',
      cidade: '',
      descricao: '',
      contato: null
    }
  }

}
