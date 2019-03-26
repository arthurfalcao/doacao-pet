import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Pet } from '../services/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  petList: Pet[];

  constructor(
    public loginService: LoginService,
    private petService: PetService
  ) {}

  ngOnInit() {
    const data = this.petService.getData();

    data.snapshotChanges().subscribe(item => {
      const pets = item.slice(0, 3);
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
