from django.urls import path
from .views import ArtistSignUpView, CustomAuthToken, LogoutView, ArtistOnlyView

urlpatterns = [
    path('signup', ArtistSignUpView.as_view(), name='signup'),
    path('login', CustomAuthToken.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='logout'),
    path('artist/dashboard', ArtistOnlyView.as_view(), name='artist_dashboard'),
]