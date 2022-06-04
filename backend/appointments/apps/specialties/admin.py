from django.contrib import admin
from apps.specialties.models import Specialty, SpecialtiesDoctor

# Register your models here.


admin.site.register(Specialty)
admin.site.register(SpecialtiesDoctor)
