import { Component, OnInit } from '@angular/core';
import { Pet } from '../services/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  petList: Pet[];

  constructor(private petService: PetService) {}

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
