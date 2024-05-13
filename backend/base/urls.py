from django.urls import path
from .views import *



urlpatterns = [
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('users/register/', registerUser, name='register'),

    path('users/profile/', getUserProfile, name='users-profile'),
    path('users/', getUsers, name='users'),

    path('products/', getProducts, name='products'),
    path('products/<str:pk>', getProduct, name='product'),
]
