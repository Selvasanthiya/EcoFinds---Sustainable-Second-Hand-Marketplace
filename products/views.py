from rest_framework.views import APIView
from rest_framework.response import Response

class ProductsRoot(APIView):
    def get(self, request):
        return Response({"message": "Products API Root"})

class ProductList(APIView):
    def get(self, request):
        # Example products, replace with DB query later
        products = [
            {"id": 1, "name": "Product A", "price": 100},
            {"id": 2, "name": "Product B", "price": 200},
        ]
        return Response({"products": products})
