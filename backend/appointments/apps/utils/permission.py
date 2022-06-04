from rest_framework import permissions, views


class AuthPermission:
    permission_classes = [permissions.IsAuthenticated]
