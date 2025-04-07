import { Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';

export const routes: Routes = [
    { path: 'store', component: StoreComponent },
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: '**', redirectTo: '/store' }
];
