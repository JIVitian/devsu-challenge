import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  keyWord: FormControl = new FormControl('', [Validators.pattern(/\S/)]);
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  onSearch() {
    if(!this.keyWord.valid) return;

    this.search.emit(this.keyWord.value);
    this.keyWord.reset();
  }
}
