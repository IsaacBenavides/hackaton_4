from rest_framework import generics

from apps.user.models import User
from .serializers import UserSerializer
import apps.utils.permission as permission
from rest_framework.permissions import IsAdminUser, IsAuthenticated


class UserListAPIView(permission.AuthPermissionAndAdmin, generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser & IsAuthenticated]


class CreateUserAPIView(generics.CreateAPIView):
    """Create a new user in the system"""

    serializer_class = UserSerializer
