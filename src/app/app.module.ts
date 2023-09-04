import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { NavbarHeaderComponent } from './navBar/navbar-header/navbar-header.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { CubeGeneratorComponent } from './cube-generator/cube-generator.component';
import { SqureGeneratorComponent } from './squre-generator/squre-generator.component';
import { DefaultHomeComponent } from './DefaultHome/default-home/default-home.component';
import { GamesComponent } from './additionGame/games.component';
import { GamesComponentComponent } from './games-component/games-component.component';
import { SubstractionGameComponent } from './substraction-game/substraction-game.component';
import { MultiplicatingGameComponent } from './multiplicating-game/multiplicating-game.component';
import { DivisionGameComponent } from './division-game/division-game.component';
import { ToolsComponent } from './tools/tools.component';
import { AgeCalculateComponent } from './age-calculate/age-calculate.component';
import { UnitConvertComponent } from './unit-convert/unit-convert.component';
import { BMICalculateComponent } from './bmi-calculate/bmi-calculate.component';

import { FuelCostCalculatorComponent } from './fuel-cost-calculator/fuel-cost-calculator.component';
import { DiscountPercentageCalculatorComponent } from './discount-percentage-calculator/discount-percentage-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavbarHeaderComponent,
    AboutComponentComponent,
    CubeGeneratorComponent,
    SqureGeneratorComponent,
    DefaultHomeComponent,
    GamesComponent,
    GamesComponentComponent,
    SubstractionGameComponent,
    MultiplicatingGameComponent,
    DivisionGameComponent,
    ToolsComponent,
    AgeCalculateComponent,
    UnitConvertComponent,
    BMICalculateComponent,

    FuelCostCalculatorComponent,
    DiscountPercentageCalculatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
