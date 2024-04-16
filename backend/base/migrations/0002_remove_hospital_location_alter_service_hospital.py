# Generated by Django 5.0.4 on 2024-04-12 08:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="hospital",
            name="location",
        ),
        migrations.AlterField(
            model_name="service",
            name="hospital",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="services",
                to="base.hospital",
            ),
        ),
    ]
