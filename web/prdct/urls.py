from django.urls import path, include 
from rest_framework.routers import DefaultRouter
from .views import ProductListAPI, CategoryListAPI, FavoriteListCreateView, FavoriteDeleteView,home, category_detail

router = DefaultRouter()
router.register(r'products', ProductListAPI, basename='product')
router.register(r'categories', CategoryListAPI, basename='category')

urlpatterns = [
    path('category/<slug:slug>/', category_detail, name='category_detail'),
    path('', home, name='home'),
    path('api/', include(router.urls)),
    path('api/favorites/', FavoriteListCreateView.as_view(), name='favorites-list-create'),
    path('api/favorites/<int:pk>/', FavoriteDeleteView.as_view(), name='favorites-delete'),
]
