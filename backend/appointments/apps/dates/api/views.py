from rest_framework import generics
from apps.dates.models import Date, Schedule
from apps.user.models import User
from .serializers import (
    ScheduleSerializer,
    CreateScheduleSerializer,
    DateSerializer,
    CreateDateSerializer,
)

from apps.utils.permission import AuthPermission, DoctorAuthPermission


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

    def get_queryset(self):
        data = Date.objects.all()
        if self.request.user.type_user == User.UserType.Patient.value:
            data = Date.objects.filter(patient=self.request.user)
        if self.request.user.type_user == User.UserType.Doctor.value:
            data = Date.objects.filter(doctor=self.request.user)
        return data


class CreateDateAPIView(DoctorAuthPermission, generics.CreateAPIView):
    """Retrieve a Specialties"""

    serializer_class = CreateDateSerializer
