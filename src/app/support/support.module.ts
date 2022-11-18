import { NgModule } from "@angular/core";
import { SupportComponent } from "./containers/support/support.component";

import { CommonModule } from "@angular/common";


// Decoratore per trasformare la classe in un modulo
@NgModule({
    // nelle declarations scrivo solo i componenti
    declarations: [
        SupportComponent,
    ],
    // Qui importo solo i Moduli
    imports: [
        CommonModule,
    ],
    // Qui esporto 
    exports: [
        SupportComponent,
    ],
})

// Dichiaro la classe con nome accompagnato da Module
export class SupportModule {

}