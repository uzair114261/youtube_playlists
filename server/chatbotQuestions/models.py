from django.db import models

# Create your models here.
class Question(models.Model):
    question = models.TextField()
    answer = models.TextField()
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)

    def __str__(self):
        return self.question
