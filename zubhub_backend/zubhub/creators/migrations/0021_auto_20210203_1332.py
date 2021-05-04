# Generated by Django 2.2.7 on 2021-02-03 13:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('creators', '0020_setting'),
    ]

    operations = [
        migrations.AlterField(
            model_name='setting',
            name='creator',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='settings', to=settings.AUTH_USER_MODEL),
        ),
    ]
