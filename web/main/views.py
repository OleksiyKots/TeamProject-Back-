# ❌ В тебе ТРИ `def home(request)` — лишаємо тільки один!

from django.shortcuts import render, get_object_or_404
from prdct.models import Product, Category

def home(request):
    category = request.GET.get('category')
    min_price = request.GET.get('price_min')
    max_price = request.GET.get('price_max')

    products = Product.objects.all()

    if category:
        products = products.filter(category__slug=category)
    if min_price:
        products = products.filter(price__gte=min_price)
    if max_price:
        products = products.filter(price__lte=max_price)

    return render(request, 'main/home.html', {
        'products': products,
        'categories': Category.objects.all()  # ← саме це підтягне з адмінки
    })


def user(request):
    return render(request, 'main/user.html')

def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    return render(request, 'main/category_detail.html', {'category': category})
