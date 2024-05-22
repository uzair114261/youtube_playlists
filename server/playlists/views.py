from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from playlists.models import PlayList
from playlists.serializers import PlaylistSerializer
from rest_framework.response import Response

# Create your views here.
class PlayListView(APIView):
    def get(self, request, category_id):
        playlists = PlayList.objects.filter(category=category_id)
        serializer = PlaylistSerializer(playlists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class PlaylistID(APIView):
    def get(self, request, playlist_id):
        playlist = PlayList.objects.get(playlistID=playlist_id)
        serializer = PlaylistSerializer(playlist)
        return Response(serializer.data, status=status.HTTP_200_OK)