import { Routes } from '@angular/router';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AuthGuard } from './guards/auth.guard';
import { TravellerResolver } from './resolvers/traveller.resolver';


export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard], children: [
    { path: 'subroute1', component: Subroute1Component },
    { path: 'subroute2/:id', component: Subroute2Component },
  ] },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard], resolve: { traveller: TravellerResolver } },
  { path: 'document', loadChildren: () => import('./modules/document/document.module').then(m => m.DocumentModule)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
