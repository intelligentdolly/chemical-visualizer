from rest_framework import viewsets
from .models import Chemical
from .serializers import ChemicalSerializer

class ChemicalViewSet(viewsets.ModelViewSet):
    queryset = Chemical.objects.all()
    serializer_class = ChemicalSerializer
