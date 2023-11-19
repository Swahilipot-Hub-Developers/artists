from rest_framework.permissions import BasePermission

class IsArtist(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user)