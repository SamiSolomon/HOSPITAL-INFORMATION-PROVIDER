# views.py
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from .models import Service, Hospital, User
from .serializers import ServiceSerializer, HospitalSerializer, UserSerializer,userSerializerWithToken

from django.contrib.auth.hashers import make_password


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class UserProfileListView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
class UserProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = userSerializerWithToken(self.user).data
        
        for k, v in serializer.items():
            data[k] = v
        
        return data

        # Add custom claims    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class RegisterUserAPIView(APIView):
    def post(self, request):
        data = request.data
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            password=make_password(data['password'])
        )
        serializer = userSerializerWithToken(user, many=False)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        message = {'detail': 'User with this email already exists'}
        return Response(message, status.HTTP_400_BAD_REQUEST)



class HospitalListAPIView(generics.ListAPIView):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer


class ServiceListAPIView(generics.ListAPIView):
    serializer_class = ServiceSerializer

    def get_queryset(self):
        # Get services provided by the hospital specified in the URL
        hospital_id = self.kwargs.get('hospital_id')
        return Service.objects.filter(hospital_id=hospital_id)

