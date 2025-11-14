from django.db import models

class Chemical(models.Model):
    name = models.CharField(max_length=200)
    formula = models.CharField(max_length=100)
    molecular_weight = models.FloatField()
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
