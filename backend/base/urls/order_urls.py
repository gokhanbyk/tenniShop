from django.urls import path
from base.views.order_views import *



urlpatterns = [
path('add/', addOrderItems, name='orders-add'),
path('<str:pk>/', getOrderById, name='user-order'),
]
