from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView
urlpatterns = [
    path('user/', views.user_page, name='user'),
    path('register/', views.register, name='register'),
    path('logout/', LogoutView.as_view(next_page='home'), name='logout'),
    path('delete-data/', views.delete_data, name='delete_data'),
]