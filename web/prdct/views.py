from django.shortcuts import render
from prdct.models import Product
from prdct.models import Category

# Create your views here.
def prdct_home(request):
    return render(request, 'main/index.html')
def home(request):
    category = request.GET.get('category')
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')

    products = Product.objects.all()

    if category:
        products = products.filter(category__slug=category)
    if min_price:
        products = products.filter(price__gte=min_price)
    if max_price:
        products = products.filter(price__lte=max_price)

    categories = Category.objects.all()

    return render(request, 'main/home.html', {
        'products': products,
        'categories': Category.objects.all()
    })
