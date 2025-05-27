from rest_framework import generics, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import get_user_model
User = get_user_model()
from .serializers import UserRegisterSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from allauth.socialaccount.models import SocialAccount
from django.shortcuts import render

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({'detail': 'Logged out successfully.'}, status=status.HTTP_200_OK)
class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        # Спроба знайти Facebook-акаунт
        fb_account = SocialAccount.objects.filter(user=user, provider='facebook').first()
        fb_info = None
        if fb_account:
            fb_info = {
                'provider': 'facebook',
                'uid': fb_account.uid,  # Facebook ID
                'name': fb_account.extra_data.get('name'),  # Ім’я профілю
                'email': fb_account.extra_data.get('email'),  # Може не бути
            }

        return Response({
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'facebook': fb_info,
        })
class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]


class CustomLoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({
            'token': token.key,
            'user_id': token.user_id,
            'username': token.user.username
        })
    
def user_profile(request):
    return render(request, 'main/user.html')

def register_page(request):
    return render(request, 'registration/register.html')

def login_page(request):
    return render(request, 'registration/login.html')
