import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { pokemonEditorErrors } from './pokemon-editor.errors';

@Component({
  selector: 'app-pokemon-editor',
  templateUrl: './pokemon-editor.component.html',
  styleUrls: ['./pokemon-editor.component.scss'],
})
export class PokemonEditorComponent implements OnInit {
  pokemonForm: FormGroup;
  isSubmitted: boolean = false;

  @Input() title: string = 'Nuevo Pokemon';
  @Input() data: Pokemon;
  @Input() isSubmitButtonEnabled: boolean = true;

  @Output() save = new EventEmitter<Pokemon>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

    this.pokemonForm = this.formBuilder.group({
      name: [this.data?.name || '', [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+\s?)+$/)]],
      image: [this.data?.image || '', [Validators.required, Validators.pattern(URL_REGEXP)]],
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
    this.isSubmitted = true;
    // If the form is invalid, don't do anything.
    if(!this.pokemonForm.valid) return;

    this.save.emit(new Pokemon(this.pokemonForm.value));
  }

  isControlValid(controlName: string) {
    return this.pokemonForm.get(controlName)?.valid;
  }

  getErrorMessage(controlName: string): string {
    const errors = this.pokemonForm.get(controlName)?.errors;
    if(!errors) return '';

    const errorsKeys = Object.keys(errors);
    if(!errorsKeys.length) return '';

    const controlErrors = pokemonEditorErrors[controlName as keyof typeof pokemonEditorErrors];

    return controlErrors[errorsKeys[0] as keyof typeof controlErrors];
  }
}
