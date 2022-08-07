import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Pokemon } from './models/pokemon';
import { PokemonService } from './services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'devsu-challenge';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon(2114).subscribe(
      (pokemon: Pokemon) => {
        console.log(pokemon);
      }
    );
  }
}
