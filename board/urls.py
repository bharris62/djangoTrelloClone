from django.conf.urls import url
from .api import ListApi, CardApi
from django.views.generic import TemplateView
urlpatterns = [
    url(r'^lists$', ListApi.as_view()),
    url(r'^cards$', CardApi.as_view()),
    url(r'^home', TemplateView.as_view(template_name="board/home.html")),
]