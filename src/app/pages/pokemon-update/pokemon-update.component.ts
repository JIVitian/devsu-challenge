import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonApiResult } from 'src/app/models/pokemon-api-result';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrls: ['./pokemon-update.component.scss'],
})
export class PokemonUpdateComponent implements OnInit {
  pokemon: Pokemon;
  enableSubmitButton: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ pokemon }) => {
      if(!pokemon) {
        alert('Pokemon no encontrado');
        this.router.navigate(['/pokemon']);
      }

      this.pokemon = new Pokemon(pokemon);
    });
  }

  onSave(pokemon: Pokemon) {
    this.enableSubmitButton = false;
    const rawPokemon = new PokemonApiResult(pokemon);
    rawPokemon.id = this.pokemon.id;

    this.pokemonService.updatePokemon(rawPokemon).subscribe({
      next: () => {
        alert('Pokemon actualizado con exito!');
        this.router.navigate(['/pokemon']);
      },
      error: () => {
        alert('Error al actualizar pokemon');
        this.enableSubmitButton = true;
      }
    });
  }

  onCancel() {
    this.router.navigate(['/pokemon']);
  }
}
