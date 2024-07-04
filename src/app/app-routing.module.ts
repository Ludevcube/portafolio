import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConcactoComponent } from './components/contacto/concacto.component';
import { SobremiComponent } from './components/sobre-mi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Inicio' }},
  { path: 'sobre-mi', component: SobremiComponent, data: { title: 'Sobre mí' } },
  { path: 'proyectos', component: ProyectosComponent, data: { title: 'Proyectos' } },
  { path: 'contacto', component: ConcactoComponent, data: { title: 'Contacto' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
