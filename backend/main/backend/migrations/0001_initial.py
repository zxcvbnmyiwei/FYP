# Generated by Django 4.0.4 on 2022-09-01 02:13

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('code', models.TextField()),
                ('output', models.TextField()),
                ('ranges', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=8), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('content', models.ManyToManyField(to='backend.content')),
            ],
        ),
    ]
