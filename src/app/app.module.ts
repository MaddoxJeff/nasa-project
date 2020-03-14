// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageService } from './services/static/storage.service';
import { Intercom, IntercomConfig } from 'ng-intercom';
//import { HttpClientModule } from '@angular/common/http';

// Modules
import { SharedModule } from './shared.module';


// Routes
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppRoutes } from './routes';

// Main Component
import { AppComponent } from './app.component';
import { HomeComponent} from './components/pages/home/home.component';
import { MarsComponent } from './components/pages/mars/mars.component';


// Modals

// Partials
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';


// Third Party
//import { Ng6O2ChartModule } from './../../node_modules/ng6-o2-chart/lib/ng6-o2-chart.module';

// Services
import { AuthenticationService } from './services/apis/authentication.service';
import { AccountService } from './services/apis/account.service';
import { AuthGuardService } from './services/guards/authguard.service';
import { marsService } from './services/apis/mars.service';
import { pictureADayService } from './services/apis/pictureADay.service';
import { nearEarthOrbitService } from './services/apis/neo.service';
import { NeoComponent } from './components/pages/neo/neo.component';
import { SandboxComponent } from './components/pages/sandbox/sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarsComponent,
    NeoComponent,
    SandboxComponent,


    // Routes
    //routingComponents,
    SidenavComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    //HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    AccountService,
    StorageService,
    //IntercomModule
    Intercom,
    IntercomConfig,
    marsService,
    pictureADayService,
    nearEarthOrbitService,
    //HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
