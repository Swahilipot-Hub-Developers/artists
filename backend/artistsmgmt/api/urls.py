from django.urls import path
from .views import ArtistSignUpView, CustomAuthToken, LogoutView, ArtistOnlyView, ArtistCreateView, ArtistRetrieveUpdateDestroyView, ArtistUpdateView
from .views import PortfolioListCreateAPIView, PortfolioDetailAPIView

urlpatterns = [
    path('signup', ArtistSignUpView.as_view(), name='signup'),
    path('login', CustomAuthToken.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='logout'),
    path('artist/dashboard', ArtistOnlyView.as_view(), name='artist_dashboard'),
    path('artist/', ArtistCreateView.as_view(), name='artist-create'),
    path('artist/update/', ArtistUpdateView.as_view(), name='artist-update'),
    path('artists/<int:pk>/', ArtistRetrieveUpdateDestroyView.as_view(),
         name='artist-retrieve-update-destroy'),
    path('portfolio/', PortfolioListCreateAPIView.as_view(), name='portfolio-list-create'),
    path('portfolio/<int:pk>/', PortfolioDetailAPIView.as_view(),
         name='portfolio-detail'),
]
