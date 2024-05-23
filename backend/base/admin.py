from django.contrib import admin
from .models import Hospital, HospitalServices

# Register your models here.
# admin.py


admin.site.register(Hospital)
admin.site.register(HospitalServices)
