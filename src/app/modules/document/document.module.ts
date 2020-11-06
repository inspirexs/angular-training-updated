import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DocsComponent } from './components/docs/docs.component';
import { DocsResultComponent } from './components/docs/docs-result/docs-result.component';
import { RouterModule } from '@angular/router';
import { documentRoutes } from './document.route';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DocsComponent,
    DocsResultComponent
  ],
  imports: [
    CommonModule,

    SharedModule,

    RouterModule.forChild(documentRoutes)
  ],
  exports: [

  ]
})
export class DocumentModule { }
