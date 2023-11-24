# Generated by Django 4.2.7 on 2023-11-24 00:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('artistsmgmt', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profession', models.CharField(max_length=100)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='portfolio')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='artistsmgmt.artist')),
            ],
        ),
    ]
