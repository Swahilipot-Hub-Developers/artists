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
        Artist.objects.create(user=instance, type='default',
                              description='default', skills='default')


class Artist(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="artist")
    type = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    skills = models.CharField(max_length=64)
    photo = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return f"{self.user.username}'s profile"


class Portfolio(models.Model):
    artist = models.ForeignKey('artistsmgmt.Artist', on_delete=models.CASCADE)
    profession = models.CharField(max_length=100)
    photo = models.ImageField(
        upload_to='portfolio', null=True, blank=True)

    def __str__(self):
        return f"{self.artist.user.username}'s Portfolio"


# Featured Artists
class FeaturedArtists(models.Model):
    selected_artist = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    profession = models.CharField(max_length=100, null=True, blank=True)
    photo = models.ImageField(
        upload_to='featured_photos/', null=True, blank=True)
    
    def __str__(self):
        return f"{self.selected_artist.artist.user.username}"


@receiver(post_save, sender=FeaturedArtists)
def update_featured_artist_fields(sender, instance, created, **kwargs):
    if created and instance.selected_artist:
        # Fetch the associated Portfolio instance
        portfolio_of_selected_artist = instance.selected_artist
        
        # Update FeaturedArtists fields with Portfolio data
        instance.profession = portfolio_of_selected_artist.profession
        instance.photo = portfolio_of_selected_artist.photo  # Assuming photo is an ImageField in Portfolio
        
        # Save the updated FeaturedArtists instance
        instance.save()
