from django.db import models
from django.utils.text import slugify
from django.conf import settings
class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    
    manufacturer = models.CharField(max_length=255, default='Unknown Manufacturer')
  # виробник
    weight = models.PositiveIntegerField(default=0)
  # грамівки

    def __str__(self):
        return self.name
class Favorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='favorites')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='favorited_by')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'product')  