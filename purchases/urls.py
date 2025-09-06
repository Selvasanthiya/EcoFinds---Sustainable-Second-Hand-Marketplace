from django.urls import path
from . import views

urlpatterns = [
    path('', views.PurchasesRoot.as_view()),
    path('checkout/', views.Checkout.as_view()),
]
