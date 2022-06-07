from django.urls import path
from .views import *


urlpatterns = [
    path("schedule_list/", ScheduleListAPIView.as_view(), name="schedule_list"),
    path("schedule_create/", CreateScheduleAPIView.as_view(), name="schedule_create"),
    path("date_list/", DateListAPIView.as_view(), name="date_list"),
    path("create_date/", CreateDateAPIView.as_view(), name="date_create"),
    path("delete_date/<int:pk>/", DeleteDateAPIView.as_view(), name="date_delete"),
]
