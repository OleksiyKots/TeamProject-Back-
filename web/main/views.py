from django.shortcuts import render, get_object_or_404
from .models import Category
def user(request):
    return render(request,'main/user.html')
def home(request):
    categories = Category.objects.all()
    return render(request, 'main/home.html', {'categories': categories})
def category_detail(request, slug):
    category = get_object_or_404(Category, slug=slug)
    return render(request, 'main/category_detail.html', {'category': category})