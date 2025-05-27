from django.urls import path
from .views import RegisterAPIView, CustomLoginView , CurrentUserView
from django.contrib.auth.views import LogoutView
from .views import user_profile, register_page, login_page
urlpatterns = [
    path('api/register/', RegisterAPIView.as_view(), name='api-register'),
    path('api/login/', CustomLoginView.as_view(), name='api-login'),
    path('api/user/', CurrentUserView.as_view(), name='api-user'),
    path('api/logout/', LogoutView.as_view(), name='api-logout'),
    path('profile/', user_profile, name='user'),
    path('register/', register_page, name='register'),
    path('login/', login_page, name='login'),
    
]

