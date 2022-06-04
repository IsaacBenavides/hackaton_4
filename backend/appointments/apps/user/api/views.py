from rest_framework import generics

from apps.user.models import User
from .serializers import UserSerializer
import apps.utils.permission as permission


class UserListAPIView(generics.ListAPIView, permission.AuthPermission):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUserAPIView(generics.CreateAPIView):
    """Create a new user in the system"""

    serializer_class = UserSerializer
