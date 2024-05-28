from django.urls import path
from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.RegisterUserAPIView.as_view(), name='token_obtain_pair'),

    path('users/profile/', views.UserProfileAPIView.as_view(), name='users-profile'),
    path('users', views.UserProfileListView.as_view(),name="user-list"),

    path('hospitals/', views.HospitalListAPIView.as_view(), name='hospital-list'),
    path('hospitals/<str:hospital_id>/', views.ServiceListAPIView.as_view(), name='hospital-services-list'),
]

