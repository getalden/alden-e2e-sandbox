from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("orders", "0001_initial")]

    operations = [
        migrations.RemoveField(model_name="aldene2e", name="legacy_code"),
    ]
