import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BudgetsListComponent } from './budgets-list/budgets-list/budgets-list.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { PanelComponent } from './panel/panel/panel.component';

export const routes: Routes = [
    {path: 'welcome',component: WelcomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'budget', component: BudgetsListComponent},
    {path: 'panel', component: PanelComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
];
