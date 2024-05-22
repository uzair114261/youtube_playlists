from django.contrib import admin
from playlists.models import PlayList, Category

# Register your models here.
admin.site.register(Category)
class PlayListAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')
    list_editable = ('category',)
    
admin.site.register(PlayList, PlayListAdmin)
