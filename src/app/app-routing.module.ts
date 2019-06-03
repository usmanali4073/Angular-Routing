import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, data: { pageTitle: 'Usman Ali'} },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
      WelcomeComponent,
      PageNotFoundComponent
    ]

})
export class AppRoutingModule { }
