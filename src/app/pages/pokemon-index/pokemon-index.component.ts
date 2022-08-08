import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
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

  onSearch(search: string) {
    // TODO: Actually there is no a search endpoint, but this is a placeholder for the future

    // this.pokemonList$ = this.pokemonService.getPokemonsByName(search).pipe(
    //   map((pokemons: Pokemon[]) => {
    //     return pokemons.map((pokemon) => new Pokemon(pokemon));
    //   }
    // ));

    alert('La palabra buscada es ' + search);
  }

  onEdit(pokemon: Pokemon) {
    this.router.navigateByUrl('pokemon/' + pokemon.id);
  }

  onDelete(id: number) {
    const decision = confirm('¿Estas seguro de eliminar este pokemon?');

    if (!decision) return;

    this.pokemonService.deletePokemon(id).subscribe({
      next: () => {
        alert('Pokemon eliminado con exito!');
        this.updateList();
      },
      error: () => {
        alert('Error al eliminar pokemon');
      },
    });
  }
}
