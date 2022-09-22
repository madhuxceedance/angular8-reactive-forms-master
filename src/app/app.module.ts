import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizePersonComponent } from './authorize-person/authorize-person.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AuthorizePersonComponent,
    InsuranceDetailsComponent,
    InsuranceDetailComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
