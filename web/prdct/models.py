from django.db import models

# Create your models here.
class prdct(models.Model):
    product = models.CharField("Назва товару",max_length=100, unique=True)
    price = models.CharField("Ціна товару" , max_length=100)
    type = models.EmailField("Категорія товару", max_length=100)

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товари"