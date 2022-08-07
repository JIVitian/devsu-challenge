import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss']
})
export class PokemonIndexComponent implements OnInit {
  pokemonList$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonList$ = this.pokemonService.getPokemons().pipe(
      map((pokemons: Pokemon[]) => {
        return pokemons.map((pokemon) => new Pokemon(pokemon));
      })
    );
  }

  alert(action: string) {
    alert(action);
  }

}
