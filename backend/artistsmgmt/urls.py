# artistsmgmt/urls.py
from django.urls import path
from .views import LoginView, RegisterView, ArtistListCreateView, ArtistRetrieveUpdateDestroyView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('artists/', ArtistListCreateView.as_view(), name='artist-list-create'),
    path('artists/<int:pk>/', ArtistRetrieveUpdateDestroyView.as_view(), name='artist-retrieve-update-destroy'),
    # Add other URL patterns if needed
]
