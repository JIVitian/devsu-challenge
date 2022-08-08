import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonList?: Pokemon[] = [];

  @Output() edit = new EventEmitter<Pokemon>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }
}
