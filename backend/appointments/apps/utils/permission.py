from rest_framework.permissions import IsAdminUser, IsAuthenticated, BasePermission
from apps.user.models import User


class IsDoctor(BasePermission):
    def has_permission(self, request, view):
        return request.user.type_user == User.UserType.Doctor


class AuthPermission:
    permission_classes = [IsAuthenticated]


class AuthPermissionAndAdmin:
    permission_classes = [IsAdminUser & IsAuthenticated]


class DoctorAuthPermission:
    permission_classes = [IsAuthenticated & IsDoctor]
