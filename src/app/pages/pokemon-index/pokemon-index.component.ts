import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { RawPokemon } from 'src/app/models/raw-pokemon';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss'],
})
export class PokemonIndexComponent implements OnInit {
  pokemonList$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.pokemonList$ = this.pokemonService.getPokemons().pipe(
      map((pokemons: Pokemon[]) => {
        return pokemons.map((pokemon) => new Pokemon(pokemon));
      })
    );
  }

  alert(action: string) {
    alert(action);
  }

  onSearch(search: string) {
    // TODO: Actually there is no a search endpoint, but this is a placeholder for the future

    // this.pokemonList$ = this.pokemonService.getPokemonsByName(search).pipe(
    //   map((pokemons: Pokemon[]) => {
    //     return pokemons.map((pokemon) => new Pokemon(pokemon));
    //   }
    // ));

    this.alert('La palabra buscada es ' + search);
  }

  onDelete(id: number) {
    this.pokemonService
      .deletePokemon(id)
      .subscribe(this.handleSusctiption('Pokemon eliminado con exito!', 'Error al eliminar pokemon'));
  }

  onEdit(pokemon: Pokemon) {
    this.router.navigateByUrl('pokemon/' + pokemon.id);
  }

  onSave(pokemon: Pokemon) {
    const rawPokemon = new RawPokemon(pokemon);

    this.pokemonService
      .createPokemon(rawPokemon)
      .subscribe(this.handleSusctiption('Pokemon creado con exito!'));
  }

  private handleSusctiption(success: string, error: string = '') {
    return {
      next: () => {
        this.alert(success);
        this.updateList();
      },
      error: (serverError: any) => {
        this.alert(error || serverError);
      },
    };
  }
}
