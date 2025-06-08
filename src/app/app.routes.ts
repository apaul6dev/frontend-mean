import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'persons',
        pathMatch: 'full'
    },
    {
        path: 'persons',
        loadComponent: () =>
            import('./pages/person-list/person-list.component').then(m => m.PersonListComponent),
        providers: [
            provideHttpClient()
        ]
    }
];
