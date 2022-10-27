from django.db import models
from django.contrib.postgres.fields import ArrayField


# class rangefield(models.Model):
#     start = models.CharField(max_length=8)


class Content(models.Model):
    text = models.TextField()
    code = models.TextField()
    output = models.TextField()
    ranges = ArrayField(
       models.TextField()
   )

    def __str__(self):
        return (self.text,self.code,self.output)

# Create your models here.
class Topic(models.Model):
    name = models.CharField(max_length=255)
    content = models.ManyToManyField(Content)

    def __str__(self):
        return (self.name)







