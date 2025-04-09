from django.urls import path

from api.views import companies_list, company_detail, company_vacancies, post_vacancy, show_all_positions, show_position_by_id, top_ten_vacancies, vacancies_list, vacancy_detail

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies),
    path('positions/', show_all_positions),
    path('positions/<int:id>/', show_position_by_id),
    path('vacancy/', post_vacancy)
]
