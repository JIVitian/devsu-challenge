import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';
import { PokemonIndexComponent } from './pages/pokemon-index/pokemon-index.component';
import { PokemonUpdateComponent } from './pages/pokemon-update/pokemon-update.component';
import { GetPokemonInfoResolverService } from './resolvers/get-pokemon-info/get-pokemon-info-resolver.service';

const routes: Routes = [
  {
    path: 'pokemon',
    children: [
      { path: '', component: PokemonIndexComponent },
      { path: 'new', component: PokemonCreateComponent },
      {
        path: ':id',
        component: PokemonUpdateComponent,
        resolve: {
          pokemon: GetPokemonInfoResolverService,
        },
      },
    ],
  },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: '**', redirectTo: 'pokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
