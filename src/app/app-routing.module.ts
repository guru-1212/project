import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from 'src/app/about-component/about-component.component';
import { ParentComponent } from 'src/app/components/parent/parent.component';
import { CubeGeneratorComponent } from 'src/app/cube-generator/cube-generator.component';
import { SqureGeneratorComponent } from 'src/app/squre-generator/squre-generator.component';

const routes: Routes = [

    {path: 'Multable', component: ParentComponent},
    {path: 'About', component: AboutComponentComponent},
    {path: 'Cube', component: CubeGeneratorComponent},
    {path: 'Squre', component: SqureGeneratorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
