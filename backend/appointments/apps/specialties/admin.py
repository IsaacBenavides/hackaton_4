from django.contrib import admin
from apps.specialties.models import Speciality, SpecialtiesDoctor

# Register your models here.


admin.site.register(Speciality)
admin.site.register(SpecialtiesDoctor)
