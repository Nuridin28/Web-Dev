import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Company, Vacancy } from '../../../core/types';
import { CompanyService } from '../../../core/services/company.service';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from '../../vacancy/vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, VacancyListComponent],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  private companyService = inject(CompanyService);

  constructor() {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  getVacancies(companyId: number) {
    this.selectedCompanyId = companyId;
    this.companyService.getCompanyVacancies(companyId).subscribe((data) => {
      this.vacancies = data;
    });

    console.log(this.vacancies);
  }
}
