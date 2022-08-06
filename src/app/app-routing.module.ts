import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonIndexComponent } from './pages/pokemon-index/pokemon-index.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonIndexComponent },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: '**', redirectTo: 'pokemon' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
