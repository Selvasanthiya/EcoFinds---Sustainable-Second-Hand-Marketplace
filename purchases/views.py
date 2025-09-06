from rest_framework.views import APIView
from rest_framework.response import Response

class PurchasesRoot(APIView):
    def get(self, request):
        return Response({"message": "Purchases API Root"})

class Checkout(APIView):
    def post(self, request):
        return Response({"message": "Checkout successful"})
