// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AboutComponent} from '../about/about.component';

// Modules
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
    { path: '', component: AboutComponent }
];

@NgModule({
    declarations: [
        AboutComponent,

    ],
    imports: [
        SharedModule,
        //MatTableModule,
        //MatTableDataSource,
        RouterModule.forChild(routes),
    ]
})

export class homeModule {}