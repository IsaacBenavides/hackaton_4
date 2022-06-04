from sqlite3 import Date
from django.contrib import admin
from apps.dates.models import Date, Schedule


admin.site.register(Date)
admin.site.register(Schedule)
