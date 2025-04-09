import { Routes } from '@angular/router';
import { CompanyListComponent } from './features/company/company-list/company-list.component';
import { VacancyListComponent } from './features/vacancy/vacancy-list/vacancy-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id/vacancies', component: VacancyListComponent },
];
