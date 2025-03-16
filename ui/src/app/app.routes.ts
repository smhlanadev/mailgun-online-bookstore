import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { StoreComponent } from './components/store/store.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'store', component: StoreComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
