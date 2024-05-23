from django.contrib import admin

# Register your models here.
# admin.py

from .models import Hospital, Service

admin.site.register(Hospital)
admin.site.register(Service)
