import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService
              ) {
          this.activatedRoute.params.subscribe ( params => { // esto regresa un observador con el metodo subscribe del ActivatedRoute
            console.log(params['id']); // ese id se corresponde a lo que pusimos en el app.route ( path: 'heroe/:id')
            this.heroe = this.heroeService.getHeroe(params['id']);
          });
  }


}
