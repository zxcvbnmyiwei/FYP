from email import contentmanager
from tabnanny import check
from django.urls import path, include

from . import views
from .views import ContentViewSet,Topic, TopicViewSet,checkResult
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('contents', ContentViewSet, basename='contents')
router.register('topics', TopicViewSet, basename='topics')

urlpatterns = [
    path('submit/', views.index),
    path('',include(router.urls)),
    path('status/<uuid:task_id>', views.checkResult),
    path('single/', views.singleFile),
    path('multiple/', views.multipleFile)
]
