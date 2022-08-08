import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { RawPokemon } from 'src/app/models/raw-pokemon';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss'],
})
export class PokemonCreateComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {}

  onSave(pokemon: Pokemon) {
    this.pokemonService.createPokemon(new RawPokemon(pokemon)).subscribe(() => {
      alert('Pokemon creado con exito!');
    });
  }

  onCancel() {
    this.router.navigate(['/pokemon']);
  }
}
