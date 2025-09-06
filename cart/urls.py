from django.urls import path
from . import views

urlpatterns = [
    path('', views.CartRoot.as_view()),
    path('add/', views.AddToCart.as_view()),
]
