from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username = None  # видаляємо поле username
    email = models.EmailField(unique=True)  # робимо email унікальним

    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)

    USERNAME_FIELD = 'email'  # основне поле входу
    REQUIRED_FIELDS = []  # не просити нічого крім email та password

    def __str__(self):
        return self.email
    
