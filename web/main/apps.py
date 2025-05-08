from django.apps import AppConfig


from django.apps import AppConfig

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

    def ready(self):
        from allauth.socialaccount.models import SocialAccount

        def fixed_str(self):
            return str(self.provider) + " → " + str(self.user)

        SocialAccount.__str__ = fixed_str
