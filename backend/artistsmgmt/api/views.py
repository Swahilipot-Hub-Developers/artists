
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, ArtistSignUpSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from .permissions import IsArtist
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.views import APIView

class ArtistSignUpView(generics.CreateAPIView):
    serializer_class = ArtistSignUpSerializer
    
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key, # Token.objects.get(user=user).key is the token generated for the user
            "message":"Artist successfully created",
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
        return Response(status=status.HTTP_200_OK)
    
# class ArtistOnlyView(generics.RetrieveAPIView):
#     permission_classes = [permissions.IsAuthenticated, IsArtist]
#     serializer_class = UserSerializer
    
#     def get_object(self):
#         return self.request.user

class ArtistOnlyView(APIView):
    permission_classes = []
    serializer_class = UserSerializer
    
    def get(self, request, format=None):
        return Response(data={"message":"You are an artist"}, status=status.HTTP_200_OK)
