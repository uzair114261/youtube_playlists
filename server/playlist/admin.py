from django.contrib import admin
from playlist.models import PlayList

# Register your models here.
class PlayListAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'link')
    list_editable = ('name',)

admin.site.register(PlayList, PlayListAdmin)