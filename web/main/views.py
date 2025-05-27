from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from prdct.models import Product, Category
from prdct.serializers import ProductSerializer, CategorySerializer
from django.shortcuts import get_object_or_404, render
class HomeAPI(APIView):
    def get(self, request):
        category = request.GET.get('category')
        min_price = request.GET.get('price_min')
        max_price = request.GET.get('price_max')

        products = Product.objects.all()

        if category:
            products = products.filter(category__slug=category)
        if min_price:
            try:
                products = products.filter(price__gte=float(min_price))
            except ValueError:
                return Response({'error': 'min_price must be a number'}, status=status.HTTP_400_BAD_REQUEST)
        if max_price:
            try:
                products = products.filter(price__lte=float(max_price))
            except ValueError:
                return Response({'error': 'max_price must be a number'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class UserPageAPI(APIView):
    def get(self, request):
        user = request.user
        return Response({
            'id': user.id,
            'username': user.username,
            'email': user.email,
        })


class CategoryDetailAPI(APIView):
    def get(self, request, slug):
        category = get_object_or_404(Category, slug=slug)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
def main_home(request):
     categories = Category.objects.all()
     return render(request, 'main/home.html', {'categories': categories})

def main_user(request):
    return render(request, 'main/user.html')