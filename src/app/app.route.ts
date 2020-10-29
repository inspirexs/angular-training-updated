import { Routes } from '@angular/router';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';


export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, children: [
    { path: 'subroute1', component: Subroute1Component },
    { path: 'subroute2', component: Subroute2Component },
  ] },
  { path: 'document', loadChildren: () => import('./modules/document/document.module').then(m => m.DocumentModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
