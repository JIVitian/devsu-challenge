import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonApiResult } from 'src/app/models/pokemon-api-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private path = environment.apiUrl;
  private idAuthorString = environment.idAuthorParam + environment.idAuthorValue;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonApiResult[]> {
    return this.http.get<PokemonApiResult[]>(this.path + this.idAuthorString);
  }

  getPokemon(id: number): Observable<PokemonApiResult> {
    return this.http.get<PokemonApiResult>(this.path + '/' + id);
  }

  createPokemon(pokemon: Pokemon): Observable<any> {
    return this.http.post(this.path + this.idAuthorString, pokemon);
  }

  updatePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.put(this.path + '/' + pokemon.id, pokemon);
  }

  deletePokemon(id: number) {
    return this.http.delete(this.path + '/' + id);
  }

}
