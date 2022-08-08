import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  defaultSprite: string = 'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_1280.png';

  @Input() pokemonList?: Pokemon[] = [];

  @Output() edit = new EventEmitter<Pokemon>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
