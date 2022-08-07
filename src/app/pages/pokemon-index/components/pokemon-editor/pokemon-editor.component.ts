import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-editor',
  templateUrl: './pokemon-editor.component.html',
  styleUrls: ['./pokemon-editor.component.scss'],
})
export class PokemonEditorComponent implements OnInit {
  pokemonForm: FormGroup;

  @Output() save = new EventEmitter<Pokemon>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

    this.pokemonForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      image: ['', [Validators.pattern(URL_REGEXP)]],
      attack: [
        1,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      defense: [
        1,
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
