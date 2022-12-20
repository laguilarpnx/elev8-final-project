import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormBudgetComponent } from './components/form-budget/form-budget.component';
import { FormRegistryComponent } from './components/form-registry/form-registry.component';
import { FormRegistryEditComponent } from './components/form-registry-edit/form-registry-edit.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormBudgetComponent,
    FormRegistryComponent,
    FormRegistryEditComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
