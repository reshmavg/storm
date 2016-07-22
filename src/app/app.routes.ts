import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';

const routes: RouterConfig = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'company',
        component: CompanyComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
