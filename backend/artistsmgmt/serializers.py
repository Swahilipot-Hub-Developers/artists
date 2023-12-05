from rest_framework import serializers
from artistsmgmt.models import User, Artist, Portfolio, FeaturedArtists, UpcomingEvents, ArtistBio
from django.shortcuts import get_object_or_404


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class ArtistSignUpSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self, **kwargs):
        user = User(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {'password': 'Passwords must match.'})
        user.set_password(password)
        user.save()
        return user

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user


class ArtistSerializer(serializers.ModelSerializer):
    artist_name = serializers.SerializerMethodField()

    class Meta:
        model = Artist
        fields = '__all__'
        extra_kwargs = {'user': {'read_only': True}}

    def get_artist_name(self, obj):
        return obj.user.username if obj.user.username else ""

# Portfolio


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'
        extra_kwargs = {'artist': {'read_only': True}}


# ArtistBio

class ArtistBioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtistBio
        fields = '__all__'
        extra_kwargs = {
            'artist': {'read_only': True},
        }

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user if request else None

        # Fetch the associated Artist instance for the authenticated user
        artist_instance = get_object_or_404(Artist, user=user)

        # Create the ArtistBio instance associating it with the corresponding Artist
        artist_bio = ArtistBio.objects.create(
            artist=artist_instance, **validated_data)
        return artist_bio


# Featured Artist

class FeaturedArtistSerializer(serializers.ModelSerializer):
    selected_artist_name = serializers.SerializerMethodField()

    class Meta:
        model = FeaturedArtists
        fields = '__all__'

    def get_selected_artist_name(self, obj):
        return f"{obj.selected_artist.artist.user.first_name} {obj.selected_artist.artist.user.last_name}"


# Upcoming Events

class UpcomingEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvents
        fields = ('id', 'title', 'location', 'time', 'description')
