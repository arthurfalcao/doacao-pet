import { Component, OnInit } from '@angular/core';
import { Pet } from '../services/pet.model';
import { PetService } from '../services/pet.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-pets-my',
  templateUrl: './pets-my.component.html',
  styleUrls: ['./pets-my.component.css']
})
export class PetsMyComponent implements OnInit {
  petList: Pet[];
  constructor(
    public loginService: LoginService,
    public petService: PetService,
  ) {}

  ngOnInit() {
    const data = this.petService.getData();
    data.snapshotChanges().subscribe(pets => {
      this.petList = pets.map(el => {
        const pet = el.payload.toJSON();
        return {
          ...pet,
          $key: el.key
        } as Pet;
      });
    });
  }
}
