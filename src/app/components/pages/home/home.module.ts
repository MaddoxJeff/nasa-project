// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent} from '../home/home.component';

// Modules
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        HomeComponent,

    ],
    imports: [
        SharedModule,
        //MatTableModule,
        //MatTableDataSource,
        RouterModule.forChild(routes),
    ]
})

export class homeModule {}