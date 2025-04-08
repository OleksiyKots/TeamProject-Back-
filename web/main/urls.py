from django.urls import path
from.import views
urlpatterns = [
    path('',views.index,name='home'),
    path('user',views.user,name='user'),
]