import { Routes } from '@angular/router';
import { LoginComponent } from '../modules/auth/login/login.component';
import { AdminComponent } from '../modules/students/admin/admin.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }

];
