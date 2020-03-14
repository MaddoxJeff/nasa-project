// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SandboxComponent} from '../sandbox/sandbox.component';

// Modules
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
    { path: '', component: SandboxComponent }
];

@NgModule({
    declarations: [
        SandboxComponent,

    ],
    imports: [
        SharedModule,
        //MatTableModule,
        //MatTableDataSource,
        RouterModule.forChild(routes),
    ]
})

export class sandboxModule {}