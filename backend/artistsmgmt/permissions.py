from rest_framework import permissions

class IsArtist(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'artist')
    
class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admin users to add featured artists.
    """

    def has_permission(self, request, view):
        # Allow GET, HEAD, or OPTIONS requests (read-only)
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Check if the user making the request is an admin
        return request.user and request.user.is_staff
