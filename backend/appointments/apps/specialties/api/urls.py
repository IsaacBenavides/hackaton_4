from django.urls import path
from .views import *

urlpatterns = [
    path("specialty_list/", SpecialtiesListAPIView.as_view(), name="specialty_list"),
    path(
        "create_specialty/", CreateSpecialtiesAPIView.as_view(), name="create_specialty"
    ),
    path(
        "specialty_list/",
        SpecialtiesListAPIView.as_view(),
        name="specialty_doctor_list",
    ),
    path(
        "create_specialty/",
        CreateSpecialtiesAPIView.as_view(),
        name="create_specialty_doctor",
    ),
    path(
        "specialty_doctor_list/",
        SpecialtiesDoctorListAPIView.as_view(),
        name="specialty_doctor_list",
    ),
    path(
        "create_specialty_doctor/",
        CreateSpecialtiesDoctorAPIView.as_view(),
        name="create_specialty_doctor",
    ),
]
