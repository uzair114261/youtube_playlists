# Generated by Django 4.2.13 on 2024-05-21 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playlists', '0002_playlist_playlistid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playlist',
            name='thumbnailURL',
        ),
        migrations.AlterField(
            model_name='playlist',
            name='playlistID',
            field=models.CharField(max_length=255),
        ),
    ]
