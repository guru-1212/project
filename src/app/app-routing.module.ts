import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from 'src/app/about-component/about-component.component';
import { ParentComponent } from 'src/app/components/parent/parent.component';
import { CubeGeneratorComponent } from 'src/app/cube-generator/cube-generator.component';
import { SqureGeneratorComponent } from 'src/app/squre-generator/squre-generator.component';
import { DefaultHomeComponent } from './DefaultHome/default-home/default-home.component';
import { GamesComponent } from './additionGame/games.component';
import { GamesComponentComponent } from './games-component/games-component.component';
import { MultiplicatingGameComponent } from './multiplicating-game/multiplicating-game.component';
import { DivisionGameComponent } from './division-game/division-game.component';
import { SubstractionGameComponent } from './substraction-game/substraction-game.component';
import { ToolsComponent } from './tools/tools.component';
import { AgeCalculateComponent } from './age-calculate/age-calculate.component';
import { BMICalculateComponent } from './bmi-calculate/bmi-calculate.component';
import { FuelCostCalculatorComponent } from './fuel-cost-calculator/fuel-cost-calculator.component';
import { UnitConvertComponent } from './unit-convert/unit-convert.component';

const routes: Routes = [
    {path: 'Multable', component: ParentComponent},
    {path: 'About', component: AboutComponentComponent},
    {path: 'Cube', component: CubeGeneratorComponent},
    {path: 'Squre', component: SqureGeneratorComponent},
    {path: 'Game', component: GamesComponentComponent},
    {path: 'AdditionGame', component: GamesComponent},
    {path: 'MultiplicationGame', component: MultiplicatingGameComponent},
    {path: 'DivisionGame', component: DivisionGameComponent},
    {path: 'SubstractionGame', component: SubstractionGameComponent},
    {path: 'Tools', component: ToolsComponent},
    // -------- Tools Router LINKS ------------->
    {path:'Age_calculator', component: AgeCalculateComponent},
    {path:'BMI_calculator', component: BMICalculateComponent},
    {path:'Fuel_cost_calculator', component: FuelCostCalculatorComponent},
    {path:'Unit_translator', component: UnitConvertComponent},

    // --------------------------------------------->
    {path: '', component: DefaultHomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
