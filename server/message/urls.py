from django.urls import path
from . import views

urlpatterns = [
    path('send-message/', views.MessageView.as_view(), name='send-message')
]