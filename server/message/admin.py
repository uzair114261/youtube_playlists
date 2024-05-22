from django.contrib import admin
from message.models import Message

# Register your models here.
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id','name','email', 'message')
    show_full_result_count = True
    
    
admin.site.register(Message, MessageAdmin)