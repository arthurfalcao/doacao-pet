import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { PetService } from '../services/pet.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-pets-register',
  templateUrl: './pets-register.component.html',
  styleUrls: ['./pets-register.component.css']
})
export class PetsRegisterComponent implements OnInit {
  userKey: string;
  constructor(
    public petService: PetService,
    public loginService: LoginService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
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
      this.petService.insertPet(petForm.value, this.userKey);
    else this.petService.updatePet(petForm.value);
    this.resetForm(petForm);
    this.router.navigate(['/pets']);
    alert('Pet cadastrado');
  }

  resetForm(petForm?: NgForm) {
    if (petForm != null) petForm.reset();
    this.petService.selectedPet = {
      $key: null,
      tipo: '',
      raca: '',
      porte: '',
      idade: '',
      cidade: '',
      descricao: '',
      contato: null
    };
  }
}
