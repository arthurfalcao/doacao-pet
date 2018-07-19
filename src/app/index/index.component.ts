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

  constructor( public loginService: LoginService, private petService: PetService) { }

  ngOnInit() {
    var x = this.petService.getData();
    var n = 0;
    x.snapshotChanges().subscribe(item => {
      this.petList = [];
      item.forEach(element => {
        if(n < 3){

          var y = element.payload.toJSON();
          y['$key'] = element.key;
          this.petList.push(y as Pet);
        }
        n++;
      });
    });
  }

}
