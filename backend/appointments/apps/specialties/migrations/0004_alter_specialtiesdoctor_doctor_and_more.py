# Generated by Django 4.0.4 on 2022-06-04 17:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('specialties', '0003_alter_specialtiesdoctor_doctor_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='specialtiesdoctor',
            name='doctor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='doctor_specialties', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='specialtiesdoctor',
            name='specialty',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='specialties_doctor', to='specialties.specialty'),
        ),
    ]
