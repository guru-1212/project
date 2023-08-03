import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { NavbarHeaderComponent } from './navBar/navbar-header/navbar-header.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { CubeGeneratorComponent } from './cube-generator/cube-generator.component';
import { SqureGeneratorComponent } from './squre-generator/squre-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavbarHeaderComponent,
    AboutComponentComponent,
    CubeGeneratorComponent,
    SqureGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
