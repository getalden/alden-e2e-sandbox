from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("orders", "0001_initial")]

    operations = [
        migrations.AddField(model_name="aldene2e", name="note", field=models.TextField(blank=True, default="")),
    ]
