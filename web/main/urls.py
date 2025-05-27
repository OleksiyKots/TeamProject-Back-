from django.urls import path
from .views import HomeAPI, UserPageAPI, CategoryDetailAPI, main_home, main_user

urlpatterns = [
    path('api/main/home/', HomeAPI.as_view(), name='main-home'),
    path('api/main/user/', UserPageAPI.as_view(), name='main-user'),
    path('api/main/category/<slug:slug>/', CategoryDetailAPI.as_view(), name='main-category-detail'),

    path('', main_home, name='main-home'),
    path('user/', main_user, name='main-user'),
]
