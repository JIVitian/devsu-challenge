import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { RawPokemon } from 'src/app/models/raw-pokemon';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrls: ['./pokemon-update.component.scss'],
})
export class PokemonUpdateComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ pokemon }) => {
      this.pokemon = new Pokemon(pokemon);
    });
  }

  onSave(pokemon: Pokemon) {
    const rawPokemon = new RawPokemon(pokemon);
    rawPokemon.id = this.pokemon.id;

    this.pokemonService.updatePokemon(rawPokemon).subscribe(() => {
      alert('Pokemon actualizado con exito!');
    });
  }

  onCancel() {
    this.router.navigate(['/pokemon']);
  }
}
