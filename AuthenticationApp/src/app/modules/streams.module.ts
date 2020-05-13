import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StreamsComponent } from "./../components/streams/streams.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TokenService } from "../services/token.service";

@NgModule({
  declarations: [StreamsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [StreamsComponent],
  providers: [TokenService]
})
export class StreamsModule {}
