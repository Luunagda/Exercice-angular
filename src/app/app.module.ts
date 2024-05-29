import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BarreDeNavComponent } from './barre-de-nav/barre-de-nav.component';
import { FooterComponent } from './footer/footer.component';
import { LignesComponent } from './lignes/lignes.component';
import { StandardComponent } from './standard/standard.component';
import { PreniumComponent } from './prenium/prenium.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BarreDeNavComponent,
    FooterComponent,
    LignesComponent,
    StandardComponent,
    PreniumComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: AccueilComponent},
      {path: 'standard', component: StandardComponent},
      {path: 'lignes', component: LignesComponent},
      {path: 'prenium', component: PreniumComponent},
      {path: 'business', component: BusinessComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
