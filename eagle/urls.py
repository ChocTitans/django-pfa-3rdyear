from django.urls import include, path
from classroom import views
from django.contrib import admin
from classroom import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('', views.home, name='home'),
    path('profile/', views.profile, name='profile'),
    path('profile/add_vehicle/', views.add_vehicle, name='add_vehicle'),
    path('profile/save_vehicle/', views.save_vehicle, name='save_vehicle'),
    path('profile/edit_vehicles/<Vehicles_id>', views.edit_vehicles, name='edit_vehicles'),
    path('profile/delete_vehicles/<Vehicles_id>', views.delete_vehicles, name='delete_vehicles'),
    path('profile/add_user/', views.create, name='create'),
    path('profile/liste_users/', views.liste_users, name='liste_users'),
    path('profile/list_vehicles/', views.liste_voitures, name='liste_voitures'),
    path('profile/edit_user/<Userlog_id>', views.edit_user, name='edit_user'),
    path('profile/delete_user/<Userlog_id>', views.delete_user, name='delete_user'),
    path('profile/my_vehicles', views.my_vehicles, name='my_vehicles'),





]
