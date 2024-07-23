# Generated by Django 5.0.6 on 2024-07-23 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("pumps", "0006_alter_pumpdetail_design_temp_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="FactoryTable",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("fac_number", models.CharField(max_length=20)),
                ("equipment", models.CharField(max_length=50)),
                ("brand", models.CharField(max_length=50)),
                ("model_short", models.CharField(max_length=20)),
                ("model", models.CharField(max_length=50)),
                ("data_type", models.CharField(max_length=10)),
                ("se_quence", models.IntegerField()),
                ("rpm", models.IntegerField()),
                ("imp_dia", models.DecimalField(decimal_places=2, max_digits=10)),
                ("flow", models.DecimalField(decimal_places=4, max_digits=15)),
                ("head", models.DecimalField(decimal_places=4, max_digits=15)),
                ("eff", models.IntegerField()),
                ("npshr", models.DecimalField(decimal_places=4, max_digits=15)),
                ("kw", models.DecimalField(decimal_places=4, max_digits=15)),
                ("curve_format", models.CharField(max_length=20)),
                ("eff_rl", models.CharField(max_length=10)),
                ("eff_status", models.IntegerField()),
                ("eff_distance", models.DecimalField(decimal_places=4, max_digits=15)),
                ("tolerance", models.IntegerField()),
                ("scale_xy", models.DecimalField(decimal_places=4, max_digits=15)),
                ("update_time", models.DateTimeField()),
                ("dry_sat", models.CharField(max_length=10)),
                ("liquid", models.DecimalField(decimal_places=4, max_digits=15)),
            ],
            options={
                "db_table": "factory_table",
            },
        ),
    ]
