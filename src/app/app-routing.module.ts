import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuoteSummaryComponent } from './quote-summary/quote-summary.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
const routes: Routes = [
  { path: 'ContactDetail', component: ContactDetailComponent },
  { path: 'QuoteSummary', component: QuoteSummaryComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactDetailComponent, QuoteSummaryComponent]

