
from django.contrib import admin
from django.urls import path , include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth.views import LogoutView
class MyLogoutView(LogoutView):
    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('favorites/', include('favorites.urls')),
    path('api/users/', include('users.urls')),
    path('',include('main.urls')),
    path('prdct/',include('prdct.urls')),
     path('', include('users.urls')),
    path('accounts/',include('django.contrib.auth.urls')),
    path('logout/', MyLogoutView.as_view(), name='logout'),
    path('accounts/', include('allauth.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
