import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonEditorComponent } from './pages/pokemon-index/components/pokemon-editor/pokemon-editor.component';
import { PokemonIndexComponent } from './pages/pokemon-index/pokemon-index.component';
import { PokemonUpdateComponent } from './pages/pokemon-update/pokemon-update.component';
import { GetPokemonInfoResolverService } from './resolvers/get-pokemon-info/get-pokemon-info-resolver.service';

const routes: Routes = [
  {
    path: 'pokemon',
    children: [
      { path: '', component: PokemonIndexComponent },
      { path: 'new', component: PokemonEditorComponent },
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
