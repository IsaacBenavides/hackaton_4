from rest_framework import generics
from apps.specialties.models import Specialty, SpecialtiesDoctor
from apps.specialties.api.serializers import (
    SpecialtiesSerializer,
    SpecialtiesDoctorSerializer,
    CreateSpecialtiesDoctorSerializer,
)
import apps.utils.permission as permission


class SpecialtiesListAPIView(permission.AuthPermission, generics.ListAPIView):
    """List all specialties"""

    queryset = Specialty.objects.all()
    serializer_class = SpecialtiesSerializer


class CreateSpecialtiesAPIView(permission.AuthPermission, generics.CreateAPIView):
    """Retrieve a Specialties"""

    serializer_class = SpecialtiesSerializer


class SpecialtiesDoctorListAPIView(permission.AuthPermission, generics.ListAPIView):
    """List all specialties"""

    queryset = SpecialtiesDoctor.objects.all()
    serializer_class = SpecialtiesDoctorSerializer


class CreateSpecialtiesDoctorAPIView(permission.AuthPermission, generics.CreateAPIView):
    """Retrieve a Specialties"""

    serializer_class = CreateSpecialtiesDoctorSerializer
