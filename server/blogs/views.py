from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from blogs.models import Blogs
from .serializers import BlogsSerializer

class BlogView(APIView):
    def get(self, request, category_id):
        blogs = Blogs.objects.filter(category_id=category_id)
        serializer = BlogsSerializer(blogs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class BlogDetailView(APIView):
    def get(self, request, slug):  # Include the slug parameter
        blog = Blogs.objects.get(slug=slug)
        serializer = BlogsSerializer(blog)
        return Response(serializer.data, status=status.HTTP_200_OK)