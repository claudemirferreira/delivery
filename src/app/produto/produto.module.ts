import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../components/material/material.module';
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";

export const customCurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.FINANCIAL
};

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListProdutoComponent } from './list-produto/list-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';


@NgModule({
  declarations: [ListProdutoComponent, CadastroProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MaterialModule,
    FormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ]
})
export class ProdutoModule { }
