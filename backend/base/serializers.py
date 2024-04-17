from rest_framework import serializers
from .models import Hospital, Service
from django.contrib.auth.models import User

from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = User
        fields = ['id','username','email', 'name', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self,obj):
        name = obj.first_name
        if name == '' :
            name = obj.email
        return name
    
class userSerializerWithToken(UserSerializer):
       token= serializers.SerializerMethodField(read_only = True)

       class Meta:
        model = User
        fields = ['id','username','email', 'name', 'isAdmin','token']  

        def get_token(self,obj):
            token = RefreshToken.for_user(obj)
            return str(token.access_token)
        
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['name', 'description']

class HospitalSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = Hospital
        fields = ['id', 'name', 'services','location','information', 'image','contact']

    def create(self, validated_data):
        services_data = validated_data.pop('services')
        hospital = Hospital.objects.create(**validated_data)
        for service_data in services_data:
            Service.objects.create(hospital=hospital, **service_data)
        return hospital
