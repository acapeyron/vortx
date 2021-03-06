import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './choice/choice.component';
import { HomeComponent } from './home/home.component';
import { PresetsComponent } from './presets/presets.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: { value: "home" } } },
  { path: 'choice', component: ChoiceComponent , data: { animation: { value: "choice" } }},
  { path: 'presets', component: PresetsComponent , data: { animation: { value: "presets" } }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
