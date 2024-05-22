from django.http import JsonResponse
from django.views import View
from .models import Question

def serialize_question(question):
    return {
        'id': question.id,
        'question': question.question,
        'answer': question.answer,
        'children': [serialize_question(child) for child in question.children.all()]
    }

class QuestionListView(View):
    def get(self, request):
        questions = Question.objects.filter(parent=None)
        return JsonResponse([serialize_question(q) for q in questions], safe=False)
