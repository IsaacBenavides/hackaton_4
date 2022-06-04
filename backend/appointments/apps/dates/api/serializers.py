from rest_framework import serializers
from apps.dates.models import Date, Schedule
from apps.user.api.serializers import UserSerializer
from apps.user.models import User
from datetime import datetime


class ScheduleSerializer(serializers.ModelSerializer):

    doctor = UserSerializer()

    class Meta:
        model = Schedule
        fields = "__all__"


class CreateScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = "__all__"

    def create(self, validated_data):
        doctor = validated_data.pop("doctor")
        if self.context["request"].user is None:
            raise serializers.ValidationError("you are not authorized")
        if doctor is None:
            raise serializers.ValidationError("Doctor is required")
        return Schedule.objects.create(doctor=doctor, **validated_data)


class DateSerializer(serializers.ModelSerializer):
    doctor = UserSerializer()
    patient = UserSerializer()

    class Meta:
        model = Date
        fields = "__all__"


class CreateDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date
        fields = "__all__"

    def create(self, validated_data):
        doctor = validated_data.pop("doctor")
        patient = validated_data.pop("patient")
        atention_date = validated_data.pop("atention_date")
        atention_start = validated_data.pop("atention_start")
        atention_end = validated_data.pop("atention_end")

        if self.context["request"].user is None:
            raise serializers.ValidationError("you are not authorized")
        if doctor is None:
            raise serializers.ValidationError("Doctor is required")
        if doctor.type_user != User.UserType.Doctor:
            raise serializers.ValidationError("must be a doctor")
        if patient is None:
            raise serializers.ValidationError("Patient is required")
        if patient.type_user != User.UserType.Patient:
            raise serializers.ValidationError("must be a patient")
        return Date.objects.create(
            doctor=doctor,
            patient=patient,
            atention_date=atention_date,
            atention_start=atention_start,
            atention_end=atention_end,
            **validated_data,
        )
