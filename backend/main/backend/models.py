from django.db import models
from django.contrib.postgres.fields import ArrayField

class Content(models.Model):
    text = models.TextField()
    code = models.TextField()
    output = models.TextField()
    ranges = ArrayField(
       models.TextField() , default=list, blank=True
   )

    def __str__(self):
        return (self.text,self.code,self.output)

# Create your models here.
class Topic(models.Model):
    name = models.CharField(max_length=255)
    content = models.ManyToManyField(Content)

    def __str__(self):
        return (self.name)







