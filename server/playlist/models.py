from django.db import models

# Create your models here.
class PlayList(models.Model):
    name = models.CharField(max_length=500)
    link = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='playlist_thumbnail')
    def __str__(self):
        return self.name