import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./Views/report-list/report-list.component').then (m => m.ReportListComponent)
    },

    {
        path:'report/:id',
        loadComponent: () => import('./Views/report-detail/report-detail.component').then (m => m.ReportDetailComponent)
    },

    {
        path:'not-found/:id',
        loadComponent: () => import('./Views/not-found/not-found.component').then (m => m.NotFoundComponent)
    },

    {
        path: '**',
        redirectTo : '',
        pathMatch: 'full'
    }

];
