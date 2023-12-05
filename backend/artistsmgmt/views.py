
from rest_framework import generics, status, permissions
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response
from .serializers import ArtistSignUpSerializer, ArtistSerializer, PortfolioSerializer, FeaturedArtistSerializer, UpcomingEventsSerializer, ArtistBioSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from .permissions import IsArtist
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Artist, Portfolio, FeaturedArtists, UpcomingEvents, ArtistBio
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from datetime import datetime, timedelta


class ArtistSignUpView(generics.CreateAPIView):
    serializer_class = ArtistSignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": ArtistSerializer(user, context=self.get_serializer_context()).data,
            # Token.objects.get(user=user).key is the token generated for the user
            "token": Token.objects.get(user=user).key,
            "message": "Artist successfully created",
        })


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        # Calculate the token expiry time (e.g., 30 days from now)
        expiry_time = datetime.now() + timedelta(days=30)

        # Create a response
        response = Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })

        # Set the token cookie as HTTP-only with an expiration time
        response.set_cookie('token', token.key,
                            httponly=True, expires=expiry_time)

        return response


class LogoutView(APIView):
    def post(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response("Successfully signed out", status=status.HTTP_200_OK)


class ArtistOnlyView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        # Retrieve the authenticated artist
        try:
            artist = Artist.objects.get(username=request.user.username)
        except Artist.DoesNotExist:
            return Response({"error": "Artist not found"}, status=status.HTTP_404_NOT_FOUND)

        # Serialize all fields and their values for the artist
        serializer = ArtistSerializer(artist)

        # Return serialized data
        return Response(serializer.data, status=status.HTTP_200_OK)


class ArtistCreateView(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtistRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtistUpdateView(generics.UpdateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    # permission_classes = [IsAuthenticated]  # Adjust permissions as needed

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class PortfolioListCreateAPIView(APIView):

    def get(self, request):
        portfolios = Portfolio.objects.all()
        serializer = PortfolioSerializer(portfolios, many=True)
        return Response(serializer.data)

    # permission_classes = [IsAdminUser]

    def post(self, request):
        serializer = PortfolioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PortfolioDetailAPIView(APIView):
    # permission_classes = [IsAdminUser]

    def get_object(self, pk):
        try:
            return Portfolio.objects.get(pk=pk)
        except Portfolio.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        portfolio = self.get_object(pk)
        serializer = PortfolioSerializer(portfolio)
        return Response(serializer.data)

    # permission_classes = [IsAdminUser]

    def put(self, request, pk):
        portfolio = self.get_object(pk)
        serializer = PortfolioSerializer(portfolio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        portfolio = self.get_object(pk)
        portfolio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# FeaturedArtists
class FeaturedArtistsListCreateView(generics.ListCreateAPIView):
    # queryset = FeaturedArtists.objects.all()
    # serializer_class = FeaturedArtistSerializer
    # permission_classes = [permissions.IsAdminUser]
    def get(self, request):
        featured_artists = FeaturedArtists.objects.all()
        serializer = FeaturedArtistSerializer(featured_artists, many=True)
        return Response(serializer.data)


class FeaturedArtistsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FeaturedArtists.objects.all()
    serializer_class = FeaturedArtistSerializer
    # permission_classes = [permissions.IsAdminUser]


# Upcoming Events

class UpcomingEventsListAPIView(generics.ListAPIView):
    queryset = UpcomingEvents.objects.all()
    serializer_class = UpcomingEventsSerializer


# ArtistBio

class ArtistBioListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = ArtistBio.objects.all()
    serializer_class = ArtistBioSerializer


class ArtistBioDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArtistBioSerializer

    def get_object(self):
        # Get the authenticated user from the request
        user = self.request.user

        try:
            # Retrieve the associated ArtistBio for the authenticated user
            artist_bio = ArtistBio.objects.get(artist=user.id)
            return artist_bio
        except ArtistBio.DoesNotExist:
            # If the ArtistBio doesn't exist, return an empty queryset
            return ArtistBio.objects.none()
