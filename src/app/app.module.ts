import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonIndexComponent } from './pages/pokemon-index/pokemon-index.component';
import { PokemonSearchComponent } from './pages/pokemon-index/components/pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pages/pokemon-index/components/pokemon-list/pokemon-list.component';
import { PokemonEditorComponent } from './pages/pokemon-index/components/pokemon-editor/pokemon-editor.component';
import { CustomRangeComponent } from './components/custom-range/custom-range.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonIndexComponent,
    PokemonSearchComponent,
    PokemonListComponent,
    PokemonEditorComponent,
    CustomRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
