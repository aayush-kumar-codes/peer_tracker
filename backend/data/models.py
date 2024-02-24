from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import UserManager

# Create your models here.


class User(AbstractUser):

    # User model fields
    email = models.EmailField(('email_address'), unique=True, max_length=200)
    dob = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=512, blank=True)
    zip_code = models.CharField(max_length=10, blank=True)

    # Required fields for Django's AbstractUser
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('username',)

    # Custom User manager
    objects = UserManager()

    def save(self, *args, **kwargs):
        self.username = self.email
        super().save(*args, **kwargs)
