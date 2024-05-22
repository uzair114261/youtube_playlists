from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blogs/', include('blogs.urls')),
    path('message/', include('message.urls')),
    path('playlist/', include('playlists.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
