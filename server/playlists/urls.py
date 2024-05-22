from django.urls import path
from playlists import views

urlpatterns = [
    path('category/<int:category_id>', views.PlayListView.as_view(), name='playlist_view' ),
    path('playlist/<str:playlist_id>', views.PlaylistID.as_view(), name='playlist_ID' )
]
