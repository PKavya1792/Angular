import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
{path:'South Burlington', component: DummyComponent },
{path:'Williston', component: DummyComponent },
{path:'Essex Junction', component: DummyComponent},
{path:'Others', component: DummyComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
