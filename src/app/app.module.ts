import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {AppComponent} from "./components/app/app.component";
import {HeroService} from "./services/hero.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing-module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {HeroSearchComponent} from "./components/hero-search/hero-search.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
