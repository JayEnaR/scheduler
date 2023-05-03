import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from "./scheduler/scheduler.component";

const routes: Routes = [
  { path: 'scheduler', component: SchedulerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
