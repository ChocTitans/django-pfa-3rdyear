# Generated by Django 4.0.3 on 2022-05-08 00:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0005_user_dob'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Type', models.CharField(blank=True, max_length=100, verbose_name='Select Type')),
                ('Matricule', models.CharField(default='AAAAA', max_length=30)),
                ('Achat', models.CharField(default='Null', max_length=30)),
                ('Etat', models.CharField(default='Bien', max_length=30)),
                ('reg_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]