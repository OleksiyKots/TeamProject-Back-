from django.urls import path
from.import views
from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView
urlpatterns = [
    path('user/', views.user_page, name='user'),
    path('register/', views.register, name='register'),

]