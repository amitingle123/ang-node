import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { Covid19ShellComponent } from './covid19-shell.component';

const routes: Routes = [
    { path: 'patients', component: Covid19ShellComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class Covid19RoutingModule {
    static components = [ Covid19ShellComponent ];
}