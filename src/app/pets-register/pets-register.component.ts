import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-pets-register',
  templateUrl: './pets-register.component.html',
  styleUrls: ['./pets-register.component.css']
})
export class PetsRegisterComponent implements OnInit {

  constructor(private petService: PetService) { }

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
