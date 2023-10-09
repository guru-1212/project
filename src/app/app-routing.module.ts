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
import { PracticeComponent } from './practice/practice.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { InputTypesChangeComponent } from './practice/input-types-change/input-types-change.component';
import { FakestoreAPIComponent } from './practice/fakestore-api/fakestore-api.component';
import { PostMethodAPIComponent } from './practice/post-method-api/post-method-api.component';
import { StudentDataComponent } from './practice/student-data/student-data.component';
import { AddStudentComponent } from './practice/student-data/add-student/add-student.component';
import { EditStudentComponent } from './practice/student-data/edit-student/edit-student.component';
import { StudentListComponent } from './practice/student-data/student-list/student-list.component';
import { RegisterStudentComponent } from './practice/student-data/register-student/register-student.component';
import { LoginStudentComponent } from './practice/student-data/login-student/login-student.component';
import { APIPracticeComponent } from './api-practice/api-practice.component';
import { FooterComponent } from './footer/footer.component';
import { ForLoopPracticeComponent } from './practice/for-loop-practice/for-loop-practice.component';
import { NextStudentComponent } from './practice/student-data/add-student/next-student/next-student.component';
import { AppRegisterComponent } from './App_register/app-register/app-register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarHeaderComponent } from './navBar/navbar-header/navbar-header.component';


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'register', component: AppRegisterComponent },
  { path: 'Mobiles', component: MobilesComponent },
  { path: 'inputValPractice', component: InputTypesChangeComponent },
  { path: 'FakestoreAPI', component: FakestoreAPIComponent },
  { path: 'PostAPI', component: PostMethodAPIComponent },
  { path: 'for_loop_practice', component: ForLoopPracticeComponent },
  {
    path: 'Dashbord', component: NavbarHeaderComponent, children: [
      // -------- Tools Router LINKS ------------->
      { path: 'Age_calculator', component: AgeCalculateComponent },
      { path: 'BMI_calculator', component: BMICalculateComponent },
      { path: 'Fuel_cost_calculator', component: FuelCostCalculatorComponent },
      { path: 'Unit_translator', component: UnitConvertComponent },
      // --------------------------------------------->
      { path: 'Balika_practice', component: APIPracticeComponent },
      { path: '', component: DefaultHomeComponent },
      { path: 'Multable', component: ParentComponent },
      { path: 'About', component: AboutComponentComponent },
      { path: 'Cube', component: CubeGeneratorComponent },
      { path: 'Squre', component: SqureGeneratorComponent },
      { path: 'Game', component: GamesComponentComponent },
      { path: 'AdditionGame', component: GamesComponent },
      { path: 'MultiplicationGame', component: MultiplicatingGameComponent },
      { path: 'DivisionGame', component: DivisionGameComponent },
      { path: 'SubstractionGame', component: SubstractionGameComponent },
      { path: 'Tools', component: ToolsComponent },
      { path: 'Practice', component: PracticeComponent },
      {
        path: 'CRUD_studentData', component: StudentDataComponent, children: [
          {
            path: 'addstudent', component: AddStudentComponent, children: [
              { path: 'next_student', component: NextStudentComponent }
            ]
          },
          { path: 'liststudent', component: StudentListComponent },
          { path: 'register', component: RegisterStudentComponent },
          { path: 'LoginStudent', component: LoginStudentComponent }
        ]
      }
    ]
  }
 
     
     
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
