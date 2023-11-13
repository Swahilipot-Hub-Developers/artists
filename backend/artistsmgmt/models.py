# artistsmgmt/models.py
from django.db import models

class Artist(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name
