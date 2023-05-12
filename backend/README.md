This project is built using DJango.
=======================================
To run, follow the below steps:
1. Install Docker in the environment, if on Windows can just install the application. If running it on ubuntu when deploying can refer this this website on how to install https://phoenixnap.com/kb/install-docker-on-ubuntu-20-04
2. Run docker build on the DockerFile to obtain a Docker Image. (change the docker image in the task/view.py in backend to what the docker image built name.)
3. In settings.py, change ALLOWED_HOSTS,CORS_ALLOWED_ORIGINS,CSRF_TRUSTED_ORIGINS to include the server's ip if deploying online.
4. Uncomment local database if using it locally, if not under DATABASES, change the database url accordingly
5.Uncomment local redis if using it locally, if not under CELERY_BROKER_URL, change the redis url accordingly
** for step 4 and 5 if deploying online, i recommend using Render to get postgreSQL and redis since its free.**
6. requirements.txt has been provided in the directory, create a venv to install the required packages using the requirements.txt
7. To start redis, run (celery -A main worker -l info --pool=solo)
8. To start the server locally, follow the above steps and:
	1) python manage.py makemigrations
	2) python manage.py migrate
	3) python manage.py runserver
9. If deploying online, you can refer to this tutorial to set up nginx
	1) https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-22-04
	2) https://www.youtube.com/watch?v=PGDx3xxLGgA