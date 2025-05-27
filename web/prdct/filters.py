import django_filters
from django_filters import OrderingFilter
from .models import Product

class ProductFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name='price', lookup_expr='gte', label='Мінімальна ціна')
    max_price = django_filters.NumberFilter(field_name='price', lookup_expr='lte', label='Максимальна ціна')
    manufacturer = django_filters.CharFilter(field_name='manufacturer', lookup_expr='icontains', label='Виробник')
    min_weight = django_filters.NumberFilter(field_name='weight', lookup_expr='gte', label='Мінімальна вага (г)')
    max_weight = django_filters.NumberFilter(field_name='weight', lookup_expr='lte', label='Максимальна вага (г)')

    order_by = OrderingFilter(
        fields=(
            ('name', 'Назва'),
            ('price', 'Ціна'),
            ('weight', 'Вага'),
        ),
        field_labels={
            'name': 'Назва',
            'price': 'Ціна',
            'weight': 'Вага',
        },
        label='Сортування'
    )

    class Meta:
        model = Product
        fields = ['min_price', 'max_price', 'manufacturer', 'min_weight', 'max_weight', 'order_by']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Додаємо CSS класи для зручності верстки форми
        for field_name, placeholder in [
            ('min_price', 'Введіть мінімальну ціну'),
            ('max_price', 'Введіть максимальну ціну'),
            ('manufacturer', 'Введіть виробника'),
            ('min_weight', 'Введіть мінімальну вагу (г)'),
            ('max_weight', 'Введіть максимальну вагу (г)')
        ]:
            self.filters[field_name].field.widget.attrs.update({
                'class': 'form-control',
                'placeholder': placeholder
            })

        # CSS для поля сортування
        self.filters['order_by'].field.widget.attrs.update({
            'class': 'form-select'
        })

