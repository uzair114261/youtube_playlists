from django.contrib import admin
from chatbotQuestions.models import Question

# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id','question','answer', 'parent')
    show_full_result_count = True
    
    
admin.site.register(Question, QuestionAdmin)