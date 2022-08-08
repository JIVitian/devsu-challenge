import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonInfoResolverService implements Resolve<any> {
  constructor(private service: PokemonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pokemon> | Promise<Pokemon> | Pokemon | null {
    const id = route.paramMap.get('id');

    if (id) {
      return this.service.getPokemon(+id);
    }

    return null;
  }
}
