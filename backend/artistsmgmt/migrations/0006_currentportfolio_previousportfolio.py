# Generated by Django 4.2.7 on 2023-12-13 05:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artistsmgmt', '0005_artist_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='CurrentPortfolio',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('artistsmgmt.portfolio',),
        ),
        migrations.CreateModel(
            name='PreviousPortfolio',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('artistsmgmt.portfolio',),
        ),
    ]
