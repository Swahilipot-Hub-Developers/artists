from django.db import models
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token

class User(AbstractUser):
    # Any additional fields or methods for the User model
    pass


    def __str__(self):
        return f"{self.username}"
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
        
@receiver(post_save, sender=User)
def create_user_artist(sender, instance, created, **kwargs):
    if created:
        Artist.objects.create(user=instance, type='default', description='default', skills='default')


class Artist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="artist")
    type = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    skills = models.CharField(max_length=64)
    photo = models.ImageField(upload_to='images/', null=True, blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s profile"
