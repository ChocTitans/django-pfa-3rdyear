# Generated by Django 4.0.3 on 2022-05-08 00:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0006_vehicles'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='VoitureAsoc',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='classroom.vehicles', verbose_name='Voitures'),
        ),
    ]
