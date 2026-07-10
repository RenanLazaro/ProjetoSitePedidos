import { Routes } from '@angular/router';
import { LoginPage } from './features/admin/pages/login-page/login-page';
import {DashboardPage} from './features/admin/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'admin/dashboard',
        component: DashboardPage,
    }
];
