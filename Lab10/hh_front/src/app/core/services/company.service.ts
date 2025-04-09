import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Vacancy } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/api/';

  constructor(private client: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}companies/`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}company/${companyId}/vacancies/`
    );
  }
}
