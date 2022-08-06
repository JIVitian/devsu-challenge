// export interface Pokemon {
// 	id?: number,
// 	name: string,
// 	image?: string,
// 	attack: number,
// 	defense: number
// }

export class Pokemon {
	id?: number;
	name!: string;
	image?: string;
	attack!: number;
	defense!: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.attack = data.attack;
    this.defense = data.defense;
  }
}
