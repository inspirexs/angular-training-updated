import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DocsComponent } from './components/docs/docs.component';

export const documentRoutes: Routes = [
  { path: '', component: DocsComponent, canActivate: [AuthGuard] }
];
