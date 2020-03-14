import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { MarsComponent } from '../app/components/pages/mars/mars.component';
import { NeoComponent} from '../app/components/pages/neo/neo.component';
import { SandboxComponent } from '../app/components/pages/sandbox/sandbox.component';
//mport { D3DisplayNeo } from '../app/components/pages/neo/d3_display_neo/display-neo.component';
import { AuthGuardService } from './services/guards/authguard.service';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'mars', component: MarsComponent },
    { path: 'neo', component: NeoComponent },
    { path: 'sandbox', component: SandboxComponent },
    //{ path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.homeModule), canActivate: [AuthGuardService]},
    //{ path: 'mars', loadChildren: () => import('./components/pages/mars/mars.module').then(m => m.marsModule), canActivate: [AuthGuardService]},
    //{ path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.homeModule)},
    //{ path: 'mars', loadChildren: () => import('./components/pages/mars/mars.module').then(m => m.marsModule)},
    //{ path: 'neo', loadChildren: () => import('./components/pages/neo/neo.module').then(m => m.neoModule)},
  ];