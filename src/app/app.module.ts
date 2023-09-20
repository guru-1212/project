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
import { PracticeComponent } from './practice/practice.component';
import { CompFistComponent } from './practice/comp-fist/comp-fist.component';
import { CompSecondComponent } from './practice/comp-second/comp-second.component';
import { DesignUtilityService } from './design-utility.service';
// import { FetchingDataComponent } from './practice/fetching-data/fetching-data.component';
import {HttpClientModule} from '@angular/common/http';
import { FetchingDataComponent } from './fetching-data/fetching-data.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { InputTypesChangeComponent } from './practice/input-types-change/input-types-change.component';
import { FakestoreAPIComponent } from './practice/fakestore-api/fakestore-api.component'
import { FakestoreServicesService } from './practice/fakestore-services.service';
import { PostMethodAPIComponent } from './practice/post-method-api/post-method-api.component';
import { FormsModule } from '@angular/forms';
import { StudentDataComponent } from './practice/student-data/student-data.component';
import { StudentListComponent } from './practice/student-data/student-list/student-list.component';
import { AddStudentComponent } from './practice/student-data/add-student/add-student.component';
import { EditStudentComponent } from './practice/student-data/edit-student/edit-student.component';
import { LoginStudentComponent } from './practice/student-data/login-student/login-student.component';
import { RegisterStudentComponent } from './practice/student-data/register-student/register-student.component';
import { APIPracticeComponent } from './api-practice/api-practice.component';
import { FooterComponent } from './footer/footer.component';
import { ForLoopPracticeComponent } from './practice/for-loop-practice/for-loop-practice.component';
// import { APIServiceComponent } from './api-practice/api-service/api-service.component';


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
    PracticeComponent,
    CompFistComponent,
    CompSecondComponent,
    FetchingDataComponent,
    MobilesComponent,
    InputTypesChangeComponent,
    FakestoreAPIComponent,
    PostMethodAPIComponent,
    StudentDataComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    LoginStudentComponent,
    RegisterStudentComponent,
    APIPracticeComponent,
    FooterComponent,
    ForLoopPracticeComponent,
    // APIServiceComponent,
    // FetchingDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DesignUtilityService,FakestoreServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
