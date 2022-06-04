from rest_framework.permissions import IsAdminUser, IsAuthenticated


class AuthPermission:
    permission_classes = [IsAuthenticated]


class AuthPermissionAndAdmin:
    permission_classes = [IsAdminUser & IsAuthenticated]
