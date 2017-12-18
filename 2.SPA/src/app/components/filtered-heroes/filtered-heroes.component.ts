import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filtered-heroes',
  templateUrl: './filtered-heroes.component.html'
})
export class FilteredHeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];

    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
