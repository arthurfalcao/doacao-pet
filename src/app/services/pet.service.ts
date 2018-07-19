import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Pet } from './pet.model';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  userKey: string;
  petList: AngularFireList<any>;
  selectedPet: Pet = new Pet();

  constructor(private firebase: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(item => {
      this.userKey = item.uid;
    });
   }

  getData() {
    this.petList = this.firebase.list('pets');
    return this.petList;
  }

  insertPet(pet: Pet) {
    this.petList.push({
      userKey: this.userKey,
      tipo: pet.tipo,
      raca: pet.raca,
      porte: pet.porte,
      idade: pet.idade,
      cidade: pet.cidade,
      descricao: pet.descricao,
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
