from secrets import choice
from django.db import models
from apps.user.models import User


class Schedule(models.Model):
    doctor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="schedules", null=False
    )
    atention_date = models.DateField(blank=False, null=False, auto_now_add=True)
    atention_start = models.TimeField(blank=False, null=False, auto_now_add=True)
    atention_end = models.TimeField(blank=False, null=False, auto_now_add=True)
    register_date = models.DateField(blank=False, null=False, auto_now_add=True)
    modification_date = models.DateField(auto_now=True)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    modification_user = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)


class Date(models.Model):
    class DateState(models.TextChoices):
        PENDING = 0, "Pendiente"
        CONFIRMED = 1, "Confirmado"
        CANCELED = 2, "Cancelado"
        FINISHED = 3, "Finalizado"

    doctor = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="doctor_date",
        null=True,
        blank=False,
    )
    patient = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="patient_date", null=True
    )
    atention_date = models.DateField(blank=False, null=False)
    atention_start = models.TimeField(
        blank=False,
        null=False,
    )
    atention_end = models.TimeField(
        blank=False,
        null=False,
    )
    state = models.IntegerField(choices=DateState.choices, default=DateState.PENDING)
    description = models.TextField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    register_date = models.DateField(blank=False, null=False, auto_now_add=True)
    modification_date = models.DateField(auto_now=True)
    register_user = models.CharField(max_length=255, null=True, blank=True)
    modification_user = models.CharField(max_length=255, null=True, blank=True)
