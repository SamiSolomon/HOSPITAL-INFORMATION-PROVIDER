from django.db import models
from django.contrib.auth.models import User



# Create your models here.
# models.py

class Hospital(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=20)
    location = models.CharField(max_length=500)
    information = models.TextField()
    image = models.ImageField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    # Add other fields as needed

    def __str__(self):
        return self.name

    def get_services(self):
        return self.services.all()
    # Other fields like address, contact info, etc.

class Service(models.Model):
    hospital = models.ForeignKey(Hospital, related_name='services', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f"{self.hospital.name}"
    # Other fields like price, availability, etc.



