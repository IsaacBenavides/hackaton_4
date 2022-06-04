import datetime
import re

from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager as DjangoUserManager


class UserManager(DjangoUserManager):
    def create_user(
        self, username, type_user, first_name, last_name, email="", password=None
    ):
        return super().create_user(
            username=username,
            email=email,
            password=password,
            type_user=type_user,
            first_name=first_name,
            last_name=last_name,
        )

    def create_superuser(
        self,
        username,
        first_name="ADMIN",
        last_name="ADMIN",
        email="",
        password=None,
    ):

        return super().create_superuser(
            username=username,
            email=email,
            password=password,
            type_user=0,
            register_date=datetime.datetime.now(),
            first_name=first_name,
            last_name=last_name,
        )


class User(AbstractUser):
    class GenderChoices(models.TextChoices):
        M = "M", "Masculine"
        F = "F", "Feminine"
        O = "O", "Other"

    class UserType(models.IntegerChoices):

        Admin = 0, "Admin"
        Patient = 1, "Patient"
        Doctor = 2, "Doctor"

    dni = models.CharField(max_length=255, null=False, blank=False)
    address = models.CharField(max_length=255, null=False, blank=False)
    phone = models.CharField(max_length=255, null=False, blank=False)
    gender = models.CharField(
        max_length=255, choices=GenderChoices.choices, null=True, blank=True
    )
    birth_date = models.DateField(null=True, blank=True)
    modication_date = models.DateField(auto_now=True)
    register_date = models.DateField(blank=False, null=False)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=False, blank=False)
    num_tuition = models.CharField(max_length=255, null=True, blank=True)
    type_user = models.IntegerField(
        choices=UserType.choices, null=False, blank=False, default=UserType.Patient
    )

    objects = UserManager()
