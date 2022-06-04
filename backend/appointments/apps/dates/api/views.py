from rest_framework import generics
from apps.dates.models import Date, Schedule
from .serializers import (
    ScheduleSerializer,
    CreateScheduleSerializer,
    DateSerializer,
    CreateDateSerializer,
)

from apps.utils.permission import AuthPermission


class ScheduleListAPIView(AuthPermission, generics.ListAPIView):
    """List all specialties"""

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer


class CreateScheduleAPIView(AuthPermission, generics.CreateAPIView):
    """Retrieve a Specialties"""

    serializer_class = CreateScheduleSerializer


class DateListAPIView(AuthPermission, generics.ListAPIView):
    """List all specialties"""

    queryset = Date.objects.all()
    serializer_class = DateSerializer


class CreateDateAPIView(AuthPermission, generics.CreateAPIView):
    """Retrieve a Specialties"""

    serializer_class = CreateDateSerializer
