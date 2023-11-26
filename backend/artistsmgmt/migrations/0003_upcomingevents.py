# Generated by Django 4.2.7 on 2023-11-26 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artistsmgmt', '0002_alter_artist_photo_alter_portfolio_photo'),
    ]

    operations = [
        migrations.CreateModel(
            name='UpcomingEvents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('time', models.DateTimeField()),
                ('description', models.TextField()),
            ],
        ),
    ]