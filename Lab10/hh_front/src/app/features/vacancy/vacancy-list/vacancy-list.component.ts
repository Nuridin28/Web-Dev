import { Component, Input, OnChanges } from '@angular/core';
import { Vacancy } from '../../../core/types';
import { CompanyService } from '../../../core/services/company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnChanges(): void {
    if (this.companyId) {
      this.companyService
        .getCompanyVacancies(this.companyId)
        .subscribe((data: Vacancy[]) => {
          this.vacancies = data;
        });
    }
  }
}
