from django.urls import path, include
from blogs import views

urlpatterns = [
    path('category/<int:category_id>', views.BlogView.as_view(), name='blogs_by_category'),
    path('category/<slug:slug>/', views.BlogDetailView.as_view(), name='blogs_by_slug')
]
