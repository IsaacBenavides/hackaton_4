# Generated by Django 4.0.4 on 2022-06-06 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Date',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('atention_date', models.DateField()),
                ('atention_start', models.TimeField()),
                ('atention_end', models.TimeField()),
                ('state', models.IntegerField(choices=[('0', 'Pendiente'), ('1', 'Confirmado'), ('2', 'Cancelado'), ('3', 'Finalizado')], default='0')),
                ('description', models.TextField(blank=True, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('register_date', models.DateField(auto_now_add=True)),
                ('modification_date', models.DateField(auto_now=True)),
                ('register_user', models.CharField(blank=True, max_length=255, null=True)),
                ('modification_user', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('atention_date', models.DateField(auto_now_add=True)),
                ('atention_start', models.TimeField(auto_now_add=True)),
                ('atention_end', models.TimeField(auto_now_add=True)),
                ('register_date', models.DateField(auto_now_add=True)),
                ('modification_date', models.DateField(auto_now=True)),
                ('register_user', models.CharField(blank=True, max_length=255, null=True)),
                ('modification_user', models.CharField(blank=True, max_length=255, null=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
    ]
