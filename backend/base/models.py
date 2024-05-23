from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import pytz

ETHIOPIAN_TZ = pytz.timezone('Africa/Addis_Ababa')

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class Hospital(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='hospital_images', null=True, blank=True)
    location = models.ForeignKey('Location', on_delete=models.CASCADE, related_name='hospitals')
    services = models.ManyToManyField(Service, related_name='hospitals')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return self.name

class Location(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.name}, {self.city}, {self.state}, {self.country}"

class HospitalServices(models.Model):
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('hospital', 'service')

    def __str__(self):
        return f"{self.hospital.name} - {self.service.name}"

class Appointment(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE, related_name='appointments')
    service = models.ForeignKey(HospitalServices, on_delete=models.CASCADE, related_name='appointments')
    appointment_date = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled')
    ], default='pending')

    def __str__(self):
        return f"{self.patient.username} - {self.hospital.name} - {self.appointment_date}"
