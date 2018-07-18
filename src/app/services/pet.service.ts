import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Pet } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  petList: AngularFireList<any>;
  selectedPet: Pet = new Pet();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.petList = this.firebase.list('pets');
    return this.petList;
  }

  insertPet(pet: Pet) {
    this.petList.push({
      tipo: pet.tipo,
      raca: pet.raca,
      porte: pet.porte,
      idade: pet.idade,
      cidade: pet.cidade,
      observacao: pet.descricao,
      contato: pet.contato
    });
  }

  updatePet(pet: Pet){
    this.petList.update(pet.$key,{
      tipo: pet.tipo,
      raca: pet.raca,
      porte: pet.porte,
      idade: pet.idade,
      cidade: pet.cidade,
      observacao: pet.descricao,
      contato: pet.contato
    })
  }

  deletePet($key: string){
    this.petList.remove($key);
  }

  deleteAllPets(){
    this.petList.remove();
  }
}
