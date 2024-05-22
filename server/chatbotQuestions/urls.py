from django.urls import path
from chatbotQuestions import views

urlpatterns = [
    path('questions', views.QuestionListView.as_view(), name='question_list'),
]