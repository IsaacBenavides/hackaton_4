from rest_framework import serializers
from apps.user.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "password",
            "email",
            "first_name",
            "last_name",
            "dni",
            "address",
            "phone",
            "gender",
            "birth_date",
            "modication_date",
            "register_date",
            "register_user",
            "num_tuition",
            "type_user",
        )

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user
