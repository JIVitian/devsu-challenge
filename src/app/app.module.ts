import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonIndexComponent } from './pages/pokemon-index/pokemon-index.component';
import { PokemonEditorComponent } from './components/pokemon-editor/pokemon-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonUpdateComponent } from './pages/pokemon-update/pokemon-update.component';
import { PokemonCreateComponent } from './pages/pokemon-create/pokemon-create.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonIndexComponent,
    PokemonSearchComponent,
    PokemonListComponent,
    PokemonEditorComponent,
    PokemonUpdateComponent,
    PokemonCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
