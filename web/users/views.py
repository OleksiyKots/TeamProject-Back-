from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserRegisterSerializer
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from django.contrib.auth import logout
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.http import HttpResponse
# Реєстрація нового користувача
def register(request):
     if request.method == 'POST':
         form = UserCreationForm(request.POST)
         if form.is_valid():
             form.save()
             messages.success(request, 'Реєстрація успішна! Тепер увійди в систему.')
             return redirect('login')
     else:
         form = UserCreationForm()
     return render(request, 'registration/register.html', {'form': form})
@login_required
def user_page(request):
     return render(request, 'registration/user.html')
from django.shortcuts import render

def delete_data(request):
    return render(request, 'main/delete_data.html')
