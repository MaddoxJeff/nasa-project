// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MarsComponent} from '../mars/mars.component';
import { HttpClient } from '@angular/common/http';

// Modules
import { SharedModule } from '../../../shared.module';

const routes: Routes = [
    { path: '', component: MarsComponent }
];

@NgModule({
    declarations: [
        MarsComponent,

    ],
    imports: [
        SharedModule,
        
        //MatTableModule,
        //MatTableDataSource,
        RouterModule.forChild(routes),
    ]
})

export class marsModule {}