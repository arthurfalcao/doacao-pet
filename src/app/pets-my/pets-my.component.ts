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
  constructor(private petService: PetService, private loginService: LoginService) { }

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


