export class RawPokemon {
  id?: number;
  attack!: number;
  defense!: number;
  hp: number = 100;
  idAuthor:number = 1;
  image: string;
  name!: string;
  type: string = "Base";

  constructor(data: any) {
    this.id = data?.id;
    this.attack = data.attack;
    this.defense = data.defense;
    this.image = data?.image;
    this.name = data.name;
  }
}
