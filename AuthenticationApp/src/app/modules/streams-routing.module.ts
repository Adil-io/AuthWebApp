import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { AuthGuard } from "../services/auth.guard";
import { StreamsComponent } from "./../components/streams/streams.component";

const routes: Routes = [
  {
    path: "streams",
    component: StreamsComponent,
    canActivate: [AuthGuard]
  },
  {
    //Default Route
    path: "**",
    redirectTo: "streams"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule {}
