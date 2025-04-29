from django.urls import path
from .views import FavoriteListView, AddFavoriteView, RemoveFavoriteView, FavoritesPageView

urlpatterns = [
    path('api/', FavoriteListView.as_view(), name='favorites_api'),
    path('api/add/', AddFavoriteView.as_view(), name='add_favorite'),
    path('api/remove/<int:item_id>/', RemoveFavoriteView.as_view(), name='remove_favorite'),
    path('', FavoritesPageView.as_view(), name='favorites_list'),  # <- Для {% url 'favorites_list' %}
]
