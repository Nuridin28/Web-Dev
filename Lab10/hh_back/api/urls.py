from django.urls import path
from .views import (
    CompaniesListView, CompanyDetailView, CompanyVacanciesView,
    VacanciesListView, VacancyDetailView
)

urlpatterns = [
    path('companies/', CompaniesListView.as_view(), name='companies_list'),
    path('company/<int:pk>/', CompanyDetailView.as_view(), name='company_detail'),
    path('company/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name='company_vacancies'),
    path('vacancies/', VacanciesListView.as_view(), name='vacancies_list'),
    path('vacancy/<int:id>/', VacancyDetailView.as_view(), name='vacancy_detail'),
]
