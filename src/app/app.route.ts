import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';


export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
