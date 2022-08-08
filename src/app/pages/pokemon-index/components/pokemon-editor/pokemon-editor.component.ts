import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-editor',
  templateUrl: './pokemon-editor.component.html',
  styleUrls: ['./pokemon-editor.component.scss'],
})
export class PokemonEditorComponent implements OnInit {
  pokemonForm: FormGroup;

  @Input() title: string = 'Nuevo Pokemon';
  @Input() data: Pokemon;
  @Output() save = new EventEmitter<Pokemon>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

    this.pokemonForm = this.formBuilder.group({
      name: [this.data?.name || '', [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+\s?)+$/)]],
      image: [this.data?.image || '', [Validators.pattern(URL_REGEXP)]],
      attack: [
        this.data?.attack || 1,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      defense: [
        this.data?.defense || 1,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  onSubmit() {
    // If the form is invalid, don't do anything.
    if(!this.pokemonForm.valid) return;

    const pokemon = new Pokemon(this.pokemonForm.value);
    this.save.emit(pokemon);
  }

  isControlValid(controlName: string) {
    const control = this.pokemonForm.get(controlName);

    return control?.valid || !control?.touched;
  }
}
