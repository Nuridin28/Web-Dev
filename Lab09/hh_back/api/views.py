from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render

from api.models import Company, Vacancy

# Create your views here.

def companies_list(request):
    companies = Company.objects.all()
    return JsonResponse([company.to_json() for company in companies], safe=False)

def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    return JsonResponse(company.to_json())

def company_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)

def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)
