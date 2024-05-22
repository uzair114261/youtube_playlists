from rest_framework import serializers
from playlists.models import PlayList

class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayList
        fields = '__all__'