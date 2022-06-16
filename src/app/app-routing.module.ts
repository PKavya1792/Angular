import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{path:'JammuKashmir', component: DummyComponent }, //if the path is South Burlington, link the Dummy component
{path:'Maharashtra', component: DummyComponent },
{path:'AndhraPradesh', component: DummyComponent},
{path:'Karnataka', component: DummyComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
