from django.contrib import admin
from django.contrib.auth.models import User
from .models import User, Vehicles
# Register your models here.

admin.site.register(Vehicles)
admin.site.register(User)
