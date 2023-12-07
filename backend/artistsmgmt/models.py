from django.db import models
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token


class Artist(AbstractUser):
    # Any additional fields or methods for the User model

    CATEGORY_CHOICES = [
        ('', 'Select Category'),
        ('visual artists', 'Visual Artists'),
        ('performing artists', 'Performing Artists'),
        ('literary artists', 'Literary Artists'),
        ('fashion artists', 'Fashion Artists'),
    ]
    
    profession = models.CharField(max_length=100, null=True, blank=True)
    photo = models.ImageField(
        upload_to='profile_photos/', null=True, blank=True)
    category = models.CharField(
        max_length=100, choices=CATEGORY_CHOICES, default='')
    pass

    class Meta:
        verbose_name = 'Artist'
        verbose_name_plural = 'Artists'

    def __str__(self):
        return f"{self.username}"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


@receiver(post_save, sender=Artist)
def create_user_artist(sender, instance, created, **kwargs):
    if created:
        # Create an ArtistBio instance for the created Artist
        ArtistBio.objects.create(artist=instance, profession='default',
                                 expert_level='default', location='default', photo='default', description='default')


# ArtistBio

class ArtistBio(models.Model):
    artist = models.OneToOneField(
        Artist, on_delete=models.CASCADE)
    profession = models.CharField(max_length=100)
    expert_level = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    photo = models.ImageField(
        upload_to='bio_photos/', null=True, blank=True)
    description = models.TextField()

    class Meta:
        verbose_name = 'Artist Bio'
        verbose_name_plural = 'Artist Bio'

    def __str__(self):
        return f"{self.artist.username}'s Bio"


# Portfolio
class Portfolio(models.Model):
    artist = models.ForeignKey('artistsmgmt.Artist', on_delete=models.CASCADE)

    CATEGORY_CHOICES = [
        ('current', 'Current Works'),
        ('previous', 'Previous Works'),
    ]

    photo = models.ImageField(
        upload_to='portfolio/', null=True, blank=True)
    video = models.FileField(
        upload_to='portfolio/', null=True, blank=True)
    category = models.CharField(
        max_length=100, choices=CATEGORY_CHOICES, default='current')

    class Meta:
        verbose_name = 'Portfolio'
        verbose_name_plural = 'Portfolio'

    def __str__(self):
        return f"{self.artist.username}'s Portfolio"


# Featured Artists
class FeaturedArtists(models.Model):
    selected_artist = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    profession = models.CharField(max_length=100, null=True, blank=True)
    photo = models.ImageField(
        upload_to='featured_photos/', null=True, blank=True)

    class Meta:
        verbose_name = 'Featured Artist'
        verbose_name_plural = 'Featured Artists'

    def __str__(self):
        return f"{self.selected_artist.artist.username}"


@receiver(post_save, sender=FeaturedArtists)
def update_featured_artist_fields(sender, instance, created, **kwargs):
    if created and instance.selected_artist:
        # Fetch the associated Portfolio instance
        portfolio_of_selected_artist = instance.selected_artist

        # Update FeaturedArtists fields with Portfolio data
        instance.profession = portfolio_of_selected_artist.profession
        # Assuming photo is an ImageField in Portfolio
        instance.photo = portfolio_of_selected_artist.photo

        # Save the updated FeaturedArtists instance
        instance.save()


# Upcoming Events

class UpcomingEvents(models.Model):
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    time = models.DateTimeField()
    description = models.TextField()

    class Meta:
        verbose_name = 'Upcoming Event'
        verbose_name_plural = 'Upcoming Events'

    def __str__(self):
        return self.title
