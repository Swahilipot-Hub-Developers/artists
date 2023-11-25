from django.urls import path
from .views import ArtistSignUpView, CustomAuthToken, LogoutView, ArtistOnlyView, ArtistCreateView, ArtistRetrieveUpdateDestroyView, ArtistUpdateView
from .views import PortfolioListCreateAPIView, PortfolioDetailAPIView, FeaturedArtistsListCreateView, FeaturedArtistsDetailView

urlpatterns = [
     
     #USer
    path('signup', ArtistSignUpView.as_view(), name='signup'),
    path('login', CustomAuthToken.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='logout'),
    
    #Artist
    path('artist/dashboard', ArtistOnlyView.as_view(), name='artist_dashboard'),
    path('artist/', ArtistCreateView.as_view(), name='artist-create'),
    path('artist/update/', ArtistUpdateView.as_view(), name='artist-update'),
    path('artists/<int:pk>/', ArtistRetrieveUpdateDestroyView.as_view(),
         name='artist-retrieve-update-destroy'),
    
    #Portfolio
    path('portfolio/', PortfolioListCreateAPIView.as_view(),
         name='portfolio-list-create'),
    path('portfolio/<int:pk>/', PortfolioDetailAPIView.as_view(),
         name='portfolio-detail'),

    # Featured Artists
    path('featured-artists/', FeaturedArtistsListCreateView.as_view(),
         name='featured-artists-list'),
    path('featured-artists/<int:pk>/', FeaturedArtistsDetailView.as_view(),
         name='featured-artists-detail'),

]
