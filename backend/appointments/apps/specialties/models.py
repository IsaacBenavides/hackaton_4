from pyexpat import model
from django.db import models
from apps.user.models import User


class Speciality(models.Model):

    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    register_date = models.DateField(blank=False, null=False, auto_now_add=True)
    modification_date = models.DateField(auto_now=True)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    modification_user = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)


class SpecialtiesDoctor(models.Model):

    doctor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="doctor_specialties", null=False
    )
    specialty = models.ForeignKey(
        Speciality,
        on_delete=models.CASCADE,
        related_name="specialties_doctor",
        null=False,
    )
    register_date = models.DateField(blank=False, null=False, auto_now_add=True)
    modification_date = models.DateField(auto_now=True)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    modification_user = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)
