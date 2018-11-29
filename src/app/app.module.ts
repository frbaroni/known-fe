import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemEstabelecimentosComponent } from './listagem-estabelecimentos/listagem-estabelecimentos.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemEstabelecimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
