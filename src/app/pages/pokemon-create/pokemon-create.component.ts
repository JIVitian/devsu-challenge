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
  enableSubmitButton: boolean = true;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {}

  onSave(pokemon: Pokemon) {
    this.enableSubmitButton = false;

    this.pokemonService.createPokemon(new RawPokemon(pokemon)).subscribe({
      next: () => {
        alert('Pokemon creado con exito!');
        this.router.navigate(['/pokemon']);
      },
      error: () => {
        alert('Error al crear pokemon');
        this.enableSubmitButton = true;
      }
    });
  }

  onCancel() {
    this.router.navigate(['/pokemon']);
  }
}
