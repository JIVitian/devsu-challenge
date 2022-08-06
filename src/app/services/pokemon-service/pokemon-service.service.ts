import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private path = environment.apiUrl;
  private idAuthorString = environment.idAuthorParam + environment.idAuthorValue;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.path + this.idAuthorString);
  }

  getPokemon(id: number): Observable<any> {
    return this.http.get(this.path + '/' + id + this.idAuthorString);
  }

  createPokemon(pokemon: Pokemon): Observable<any> {
    return this.http.post(this.path, pokemon);
  }

  updatePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.put(this.path + '/' + pokemon.id, pokemon);
  }

  deletePokemon(id: number) {
    return this.http.delete(this.path + '/' + id);
  }

}
