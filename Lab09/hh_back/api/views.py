import json
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt

from api.models import Company, Position, Vacancy

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

@csrf_exempt
def post_vacancy(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['name']
        description = data['description']
        salary = data['salary']
        company_id = data['company_id']
        position_id = data['position_id']
        if not name or not description or not salary or not company_id or not position_id:
            return JsonResponse({"error": "Name, description, salary, company_id and position_id are required"}, status=400)
        company = get_object_or_404(Company, id=company_id)
        position = get_object_or_404(Position, id=position_id)
        vacancy = Vacancy(name=name, description=description, salary=salary, company=company, position=position)
        vacancy.save()
        return JsonResponse(vacancy.to_json(), status=201)
    return JsonResponse({"error": "Invalid request method"}, status=405)



def show_all_positions(request):
    positions = Position.objects.all()
    return JsonResponse([position.to_json() for position in positions], safe=False)

def show_position_by_id(request, id):
    position = get_object_or_404(Position, id=id)
    return JsonResponse(position.to_json())

