from rest_framework.views import APIView
from rest_framework.response import Response

class CartRoot(APIView):
    def get(self, request):
        return Response({"message": "Cart API Root"})

class AddToCart(APIView):
    def post(self, request):
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)
        return Response({"message": f"Added product {product_id} (x{quantity}) to cart"})
