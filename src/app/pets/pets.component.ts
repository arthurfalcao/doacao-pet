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

  constructor(private petService: PetService) { }

  ngOnInit() {
    var x = this.petService.getData();
    x.snapshotChanges().subscribe(item => {
      this.petList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.petList.push(y as Pet);
      });
    });
  }

}
