# Generated by Django 4.2.13 on 2024-05-21 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playlists', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='playlistID',
            field=models.CharField(default='None', max_length=255),
        ),
    ]
