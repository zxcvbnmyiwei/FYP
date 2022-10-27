from rest_framework import serializers
from .models import Content,Topic

# class RangeFieldSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = rangefield
#         fields = '__all__'


class ContentSeralizer(serializers.ModelSerializer):

    class Meta:
        model = Content
        # fields = ['id', 'text', 'code', 'output']
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    content = ContentSeralizer(read_only=True, many=True)
    
    class Meta:
        model = Topic
        # fields = ['id','name']
        fields = '__all__'

