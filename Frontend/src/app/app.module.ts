import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

import { AppComponent } from './app.component';
import { CalculatorAppComponent } from './calculator-app/calculator-app.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ✅ Add FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
