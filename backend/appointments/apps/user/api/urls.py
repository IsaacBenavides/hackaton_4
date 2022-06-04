from django.urls import path
from .views import UserListAPIView, CreateUserAPIView

urlpatterns = [
    path("users_list", UserListAPIView.as_view(), name="users_list"),
    path("create_user", CreateUserAPIView.as_view(), name="create_user"),
]
