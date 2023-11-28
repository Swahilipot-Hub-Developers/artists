from django.contrib import admin
from .models import User, Artist, Portfolio, FeaturedArtists, UpcomingEvents

# Register your models here.
admin.site.register(User)
admin.site.register(Artist)
admin.site.register(Portfolio)
admin.site.register(FeaturedArtists)
admin.site.register(UpcomingEvents)

