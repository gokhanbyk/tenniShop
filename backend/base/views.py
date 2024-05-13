from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from .models import Product
from .serializers import ProductSerializer, UserSerializer, UserSerializerWithToken
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


# djando restframework
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

# simplejwt
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for key, value in serializer.items():
          data[key] = value

        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
   serializer_class = MyTokenObtainPairSerializer

# Create your views here.
@api_view(['POST'])
def registerUser(request):
  data = request.data

  try:
    user = User.objects.create(
      first_name = data['name'],
      username = data['email'],
      email = data['email'],
      password = make_password(data['password'])
    )

    serializer = UserSerializerWithToken(user, many=False)
  except:
    message = {'detail': 'User with this email already exists'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)

  return Response(serializer.data)


@api_view(['GET'])
def getProducts(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)

  return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
  product = Product.objects.get(_id = pk)
  serializer = ProductSerializer(product, many=False)
  
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
  user = request.user

  serializer = UserSerializer(user, many=False)

  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
  users = User.objects.all()
  serializer = UserSerializer(users, many=True)

  return Response(serializer.data)