from django.shortcuts import render

# Create your views here.
def prdct_home(request):
    return render(request, 'main/index.html')