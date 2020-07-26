
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './components/material/material.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { SharedModule } from './shared/shared.module';
import { ProdutoModule } from './produto/produto.module';
import { EntregadorModule } from './entregador/entregador.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrudService } from './shared/crud-service';
import { ProdutoService } from './produto/produto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    EntregadorModule,
    ProdutoModule,
    SharedModule,
    NgxUiLoaderModule
  ],
  providers: [
    CrudService,
    ProdutoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
