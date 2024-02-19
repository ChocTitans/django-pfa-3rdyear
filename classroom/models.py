from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime
import datetime
from django.contrib.auth.hashers import make_password


class Vehicles(models.Model):
    Type = models.CharField(max_length=100, blank=True, verbose_name="Select Type")
    Matricule = models.CharField(max_length=30, default="AAAAA")
    Achat = models.CharField(max_length=30, default="Null")
    Etat = models.CharField(max_length=30, default="Bien")
    reg_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Matricule

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    is_normal = models.BooleanField(default=False)
    dob = models.DateField(("Date"), default=datetime.date.today)
    VoitureAsoc = models.ForeignKey(Vehicles, default=1, verbose_name="Voitures", on_delete=models.SET_DEFAULT)

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(User, self).save(*args, **kwargs)

    class Meta:
        swappable = 'AUTH_USER_MODEL'


