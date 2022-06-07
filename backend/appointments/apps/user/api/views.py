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


class UserProfileAPIView(permission.AuthPermission, generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer

    def get_object(self):

        return self.request.user


class PatientListAPIView(permission.AuthPermission, generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(type_user=User.UserType.Patient)


class DoctorListAPIView(permission.AuthPermission, generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(type_user=User.UserType.Doctor)
