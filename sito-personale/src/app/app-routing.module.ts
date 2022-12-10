import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentazioneComponent } from './components/presentazione/presentazione.component';

const routes: Routes = [
  { path: '', component: PresentazioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
