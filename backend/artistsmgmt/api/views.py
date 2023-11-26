
from rest_framework import generics, status, permissions
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.response import Response
from .serializers import UserSerializer, ArtistSignUpSerializer, ArtistSerializer, PortfolioSerializer, FeaturedArtistSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from .permissions import IsArtist
from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import Artist, User, Portfolio, FeaturedArtists
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class ArtistSignUpView(generics.CreateAPIView):
    serializer_class = ArtistSignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
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
        return Response({

            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })


class LogoutView(APIView):
    def post(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response("Successfully signed out", status=status.HTTP_200_OK)

# class ArtistOnlyView(generics.RetrieveAPIView):
#     permission_classes = [permissions.IsAuthenticated, IsArtist]
#     serializer_class = UserSerializer

#     def get_object(self):
#         return self.request.user


class ArtistOnlyView(APIView):
    permission_classes = [IsAuthenticated, IsArtist]
    serializer_class = UserSerializer

    def get(self, request, format=None):
        return Response(data={"message": "You are an artist"}, status=status.HTTP_200_OK)


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

    permission_classes = [IsAdminUser]

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
    queryset = FeaturedArtists.objects.all()
    serializer_class = FeaturedArtistSerializer
    # permission_classes = [permissions.IsAdminUser]


class FeaturedArtistsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FeaturedArtists.objects.all()
    serializer_class = FeaturedArtistSerializer
    permission_classes = [permissions.IsAdminUser]
