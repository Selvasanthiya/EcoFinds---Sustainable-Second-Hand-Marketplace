from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductsRoot.as_view()),
    path('list/', views.ProductList.as_view()),
]
