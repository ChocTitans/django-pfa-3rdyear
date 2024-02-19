from django.forms import ModelForm
from django.forms.utils import ValidationError
from classroom.models import User, Vehicles
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User
from bootstrap_modal_forms.forms import BSModalModelForm, BSModalForm
from bootstrap_modal_forms.mixins import PopRequestMixin, CreateUpdateAjaxMixin
from django.contrib.auth import get_user_model
from django.core.signals import setting_changed
from django.dispatch import receiver




class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email', 'dob', 'VoitureAsoc']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control custom-class'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control custom-class'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control custom-class'}),
            'email': forms.EmailInput(attrs={'class': 'form-control custom-class '}),
            'dob': forms.DateInput(attrs={'class': 'form-group custom-class', 'type': 'date'}),
            'password': forms.PasswordInput(attrs={'class': 'form-control custom-class'}),
            'VoitureAsoc': '',
        }




class VehiclesForm(ModelForm):
    class Meta:
        model = Vehicles
        fields = ('Matricule', 'Type', 'Etat', 'Achat')
        widgets = {
            'Matricule': forms.TextInput(attrs={'class': 'form-control custom-class'}),
            'Type': forms.TextInput(attrs={'class': 'form-control custom-class'}),
            'Etat': forms.TextInput(attrs={'class': 'form-control custom-class'}),
            'Achat': forms.TextInput(attrs={'class': 'form-control custom-class'}),
        }