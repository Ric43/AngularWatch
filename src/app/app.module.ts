import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimeModule } from './time/time.module';
import { TimeService } from './shared/time.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TimeModule,
    RouterModule.forRoot([])
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
