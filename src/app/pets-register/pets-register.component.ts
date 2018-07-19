import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { LoginService } from '../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pets-register',
  templateUrl: './pets-register.component.html',
  styleUrls: ['./pets-register.component.css']
})
export class PetsRegisterComponent implements OnInit {

  constructor(private petService: PetService, public loginService: LoginService, private location: Location) { }
  
  ngOnInit() {
    this.petService.getData();
    this.resetForm();
  }

  onSubmit(petForm: NgForm) {
    if (petForm.value.$key == null)
      this.petService.insertPet(petForm.value);
    else
      this.petService.updatePet(petForm.value);
    this.resetForm(petForm);
    this.location.back();
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
