from rest_framework import generics, views, status
from apps.dates.models import Date, Schedule
from apps.user.models import User
from .serializers import (
    ScheduleSerializer,
    CreateScheduleSerializer,
    DateSerializer,
    CreateDateSerializer,
)
from rest_framework.response import Response
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


class CreateDateAPIView(AuthPermission, generics.CreateAPIView):
    """Retrieve a Specialties"""

    serializer_class = CreateDateSerializer


class DeleteDateAPIView(DoctorAuthPermission, views.APIView):
    """Retrieve a Specialties"""

    def delete(self, request, pk, format=None):
        date = self.get_object(pk)
        date.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
