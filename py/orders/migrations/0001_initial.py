from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True
    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Order",
            fields=[
                ("id", models.AutoField(primary_key=True)),
                ("reference", models.CharField(max_length=32, unique=True)),
                ("total_cents", models.IntegerField()),
                ("legacy_code", models.CharField(max_length=16, blank=True)),
            ],
        ),
    ]
