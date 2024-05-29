from django.db import models


class PlayList(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    playlistID = models.CharField(max_length=255)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    
    
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
