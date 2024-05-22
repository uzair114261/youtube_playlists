from django.urls import path
from message import views

urlpatterns = [
    path('new_messages', views.NewMessage.as_view(), name='new_message' )
]