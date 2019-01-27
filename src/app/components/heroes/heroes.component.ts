import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor(private _heroesService: HeroesService,
              private  router: Router) { }

  ngOnInit() {  // cuando esta toda la página renderizada (esta para ser trabajada)
    this.heroes = this._heroesService.getHeroes(); // Recoge en la variable creada el array de los objetos heroes que se encuentran en el servicio
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
     this.router.navigate (['/heroe', idx]);
  }

}
