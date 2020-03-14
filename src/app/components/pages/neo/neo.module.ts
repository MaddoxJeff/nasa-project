// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NeoComponent} from '../neo/neo.component';

// Modules
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
    { path: '', component: NeoComponent }
];

@NgModule({
    declarations: [
        NeoComponent,

    ],
    imports: [
        SharedModule,
        //MatTableModule,
        //MatTableDataSource,
        RouterModule.forChild(routes),
    ]
})

export class neoModule {}