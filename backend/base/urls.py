from django.urls import path
from . import views


urlpatterns = [
    path('api/users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/users/register/', views.RegisterUserAPIView.as_view(), name='token_obtain_pair'),

    path('api/users/profile/', views.UserProfileAPIView.as_view(), name='users-profile'),
    path('api/users', views.UserProfileListView.as_view(),name="user-list"),

    path('api/hospitals/', views.HospitalListAPIView.as_view(), name='hospital-list'),
    path('api/hospitals/<str:hospital_id>/', views.ServiceListAPIView.as_view(), name='hospital-services-list'),
]

