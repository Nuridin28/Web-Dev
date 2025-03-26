from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
from django.db import DatabaseError, OperationalError

def safe_json_response(func):
    def wrapper(request, *args, **kwargs):
        try:
            return func(request, *args, **kwargs)
        except (Product.DoesNotExist, Category.DoesNotExist):
            return JsonResponse({'error': 'Not found'}, status=404)
        except (DatabaseError, OperationalError):
            return JsonResponse({'error': 'Database error'}, status=500)
        except Exception as e:
            return JsonResponse({'error': f'Unexpected error: {str(e)}'}, status=500)
    return wrapper


@safe_json_response
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


@safe_json_response
def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product.to_json())


@safe_json_response
def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


@safe_json_response
def category_detail(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category.to_json())


@safe_json_response
def products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
