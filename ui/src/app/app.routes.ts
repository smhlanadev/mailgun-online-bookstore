import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'store', component: StoreComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
