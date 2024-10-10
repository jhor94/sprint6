import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BudgetsListComponent } from './budgets-list/budgets-list/budgets-list.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

export const routes: Routes = [
    {path: 'welcome',component: WelcomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'Budget', component: BudgetsListComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
];
