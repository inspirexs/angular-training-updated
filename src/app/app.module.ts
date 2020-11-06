import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';

import { ContentInnerComponent } from './components/content/content-inner/content-inner.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { Subroute1Component } from './components/content/content-subroutes/subroute1/subroute1.component';
import { Subroute2Component } from './components/content/content-subroutes/subroute2/subroute2.component';
import { AuthGuard } from './guards/auth.guard';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { TravellerResolver } from './resolvers/traveller.resolver';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ContentComponent,
    ContentInnerComponent,
    Subroute1Component,
    Subroute2Component,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,

    TravellerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
