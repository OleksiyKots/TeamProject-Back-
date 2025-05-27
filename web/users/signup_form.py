from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

class CustomSignupForm(forms.ModelForm):
    password1 = forms.CharField(
        label="Пароль",
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
        help_text="Пароль повинен містити принаймні 8 символів."
    )
    password2 = forms.CharField(
        label="Підтвердження паролю",
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
        help_text="Введіть той самий пароль для підтвердження."
    )

    class Meta:
        model = get_user_model()  # Directly set the model here
        fields = ('email', 'full_name', 'phone')
        widgets = {
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'full_name': forms.TextInput(attrs={'class': 'form-control'}),
            'phone': forms.TextInput(attrs={'class': 'form-control'}),
        }
        labels = {
            'email': 'Email адреса',
            'full_name': 'Повне ім\'я',
            'phone': 'Номер телефону',
        }

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Паролі не співпадають")
        return password2

    def clean_password1(self):
        password1 = self.cleaned_data.get('password1')
        if password1:
            validate_password(password1)
        return password1

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

    def signup(self, request, user):
        """Метод для allauth сумісності"""
        return user