import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent)
    },
    {
        path: 'app/user',
        loadComponent: () => import('../app/features/user/user.component').then(m => m.UserComponent)
    },
    {
        path: 'app/dashboard',
        loadComponent: () => import('../app/features/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: '**',
        loadComponent: () => import('../app/features/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];