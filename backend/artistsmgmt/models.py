# artistsmgmt/models.py
from django.db import models
from django.contrib.auth.models import User

# class Artist(models.Model):
#     username = models.CharField(max_length=100)
#     password = models.CharField(max_length=50)

#     def __str__(self):
#         return self.name
    
    
    
class Artist(models.Model):
    name = models.CharField(max_length=100, default='')
    type = models.CharField(max_length=100, default='')
    description = models.TextField(default='')
    photo = models.ImageField(upload_to='item_photos/', null=True, blank=True)
    
    def __str__(self):
        return self.name
