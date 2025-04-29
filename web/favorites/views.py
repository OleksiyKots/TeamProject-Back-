from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Favorite
from .serializers import FavoriteSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
# Переглянути список обраного
class FavoriteListView(generics.ListAPIView):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)

# Додати до обраного
class AddFavoriteView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        item_id = request.data.get('item_id')
        if not Favorite.objects.filter(user=request.user, item_id=item_id).exists():
            Favorite.objects.create(user=request.user, item_id=item_id)
            return Response({'message': 'Додано в обране.'})
        else:
            return Response({'message': 'Елемент уже в обраному.'})

# Видалити з обраного
class RemoveFavoriteView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, item_id):
        favorite = get_object_or_404(Favorite, user=request.user, item_id=item_id)
        favorite.delete()
        return Response({'message': 'Видалено з обраного.'})
@method_decorator(login_required, name='dispatch')
class FavoritesPageView(TemplateView):
    template_name = 'favorites/favorites_list.html'
