from django.urls import path
from .views import *

urlpatterns = [
    path("users_list/", UserListAPIView.as_view(), name="users_list"),
    path("create_user/", CreateUserAPIView.as_view(), name="create_user"),
    path("user_profile/", UserProfileAPIView.as_view(), name="user_profile"),
]
