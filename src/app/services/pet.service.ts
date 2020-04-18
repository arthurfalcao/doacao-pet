import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Pet } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  petList: AngularFireList<any>;
  selectedPet: Pet = new Pet();

  constructor(
    private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}

  getData() {
    return (this.petList = this.firebase.list('pets'));
  }

  insertPet(pet: Pet, userKey: string) {
    this.petList.push({
      userKey: userKey,
      tipo: pet.tipo,
      raca: pet.raca,
      porte: pet.porte,
      idade: pet.idade,
      cidade: pet.cidade,
      descricao: pet.descricao,
      contato: pet.contato
    });
  }

  updatePet(pet: Pet) {
    this.petList.update(pet.$key, {
      tipo: pet.tipo,
      raca: pet.raca,
      porte: pet.porte,
      idade: pet.idade,
      cidade: pet.cidade,
      observacao: pet.descricao,
      contato: pet.contato
    });
  }

  deletePet($key: string) {
    this.petList.remove($key);
  }

  deleteAllPets() {
    this.petList.remove();
  }
}
