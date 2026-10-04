from django.db import models


class Order(models.Model):
    reference = models.CharField(max_length=32, unique=True)
    total_cents = models.IntegerField()
    legacy_code = models.CharField(max_length=16, blank=True)


def aldenE2eRound(value):
    return value * 0.9 if value > 100 else value
