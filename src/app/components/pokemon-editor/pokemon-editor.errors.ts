export const pokemonEditorErrors = {
  name: {
    required: 'El nombre es requerido',
    pattern: 'El nombre debe contener solo letras y espacios',
  },
  image: {
    required: 'La imagen es requerida',
    pattern: 'La imagen debe ser una URL válida',
  },
  attack: {
    required: 'La ataque es requerida',
    min: 'La ataque debe ser mayor a 1',
    max: 'La ataque debe ser menor a 100',
  },
  defense: {
    required: 'La defensa es requerida',
    min: 'La defensa debe ser mayor a 1',
    max: 'La defensa debe ser menor a 100',
  },
};

