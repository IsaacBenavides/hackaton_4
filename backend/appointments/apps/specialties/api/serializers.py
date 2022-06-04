from rest_framework import serializers
from apps.specialties.models import Specialty, SpecialtiesDoctor
from apps.user.api.serializers import UserSerializer
from apps.user.models import User


class SpecialtiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialty
        fields = (
            "id",
            "name",
            "description",
            "register_date",
            "modification_date",
            "register_user",
            "modification_user",
            "is_active",
        )


class SpecialtiesDoctorSerializer(serializers.ModelSerializer):
    doctor = UserSerializer()
    specialty = SpecialtiesSerializer()

    class Meta:
        model = SpecialtiesDoctor
        fields = (
            "id",
            "doctor",
            "specialty",
            "register_date",
            "modification_date",
            "register_user",
            "modification_user",
            "is_active",
        )


class CreateSpecialtiesDoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialtiesDoctor
        fields = (
            "id",
            "doctor",
            "specialty",
            "register_date",
            "modification_date",
            "register_user",
            "modification_user",
            "is_active",
        )

    def create(self, validated_data):
        doctor = validated_data.pop("doctor")
        specialty = validated_data.pop("specialty")
        if self.context["request"].user is None:
            raise serializers.ValidationError("you are not authorized")
        if doctor is None:
            raise serializers.ValidationError("Doctor is required")
        if doctor is not None:
            if doctor.type_user != User.UserType.Doctor:
                raise serializers.ValidationError("User must be a doctor")
        if specialty is None:
            raise serializers.ValidationError("Specialty is required")
        specialty_doctor = SpecialtiesDoctor.objects.create(
            doctor=doctor,
            specialty=specialty,
            **validated_data,
        )
        return specialty_doctor
