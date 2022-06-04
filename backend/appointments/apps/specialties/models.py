from ast import Return
from pyexpat import model
from django.db import models
from apps.user.models import User


class Specialty(models.Model):

    name = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    register_date = models.DateField(blank=False, null=False, auto_now_add=True)
    modification_date = models.DateField(auto_now=True)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    modification_user = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)


class SpecialtiesDoctor(models.Model):
    def is_doctor(value):
        return value.type_user == User.UserType.Doctor

    doctor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="doctor_specialties",
        null=False,
        blank=False,
        validators=[is_doctor],
    )
    specialty = models.ForeignKey(
        Specialty,
        on_delete=models.CASCADE,
        related_name="specialties_doctor",
        null=False,
        blank=False,
    )
    register_date = models.DateField(blank=False, null=False, auto_now_add=True)
    modification_date = models.DateField(auto_now=True)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    modification_user = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)
