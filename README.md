LODE Grodno news site
=========================================
The site is the basis for the management and publication of news on the web.

***

Server side technologies stack: 
- Java
- Spring
- JWT
- Hibernate

Client: 
- Angular 2

Build tools: 
- Gradle
- Webpack

Other:
- Tomcat 9
- PostrgeSQL

***

Version 1.0.0  

Installation Project for Windows
=========================================

Install environment (Java 8 must be installed in the system):

1. Download the Tomcat 9 (Core) on [link](http://tomcat.apache.org/download-90.cgi) and unzip it.

2. Download Gradle ver. 3.3 [link](https://gradle.org/install#manually)
	* Unpack the archive and set the path in the Path environment variable to the directory */bin* unpacked archive.
 

3. Download and install PostgreSQL on [link](https://www.postgresql.org/download/windows/)
 
	* Log in to the standard database "postgres" - use the username and password specified during installation.
	* Use SQL-query from a file **conf/dump.sql** to create a test database.


 
Build project
=========================================
1. Download the project from this repository

	* In file **src\main\resources\application.properties** set the username and password for Postgress
	* Change in the file **deploy.cmd** variable *tomcat* to Tomcat installation folder.
	* In the console, navigate to the folder with the project and run the command `gradle deploy`
	* Wait for the Tomcat start and go to the URL [http://localhost:8080/lodegro/](http://localhost:8080/lodegro/)





Руководство по установке проекта для Windows
=========================================

Установка окружения (Java 8 должна быть установлена в системе):

1. Скачайте Tomcat 9 (Core) по [ссылке](http://tomcat.apache.org/download-90.cgi) и разархивируйте его.

2. Скачайте Gradle ver. 3.3 по [ссылке](https://gradle.org/install#manually) 
 * Распакуйте архив и укажите путь в переменной окружения Path к папке */bin* в распакованном архиве.
 
 
3. Скачайте и установите PostgreSQL по [ссылке](https://www.postgresql.org/download/windows/)
 
  * Войдите в стандартную базу "postgres" используя заданный при установке логин и пароль.
  * Используйте SQL-запрос из файла **conf/dump.sql** что бы сгенерировать тестовую схему базы данных.
 
Сборка проекта
=========================================
1. Скачайте проект с этого репозитория

  * В файле **src\main\resources\application.properties** установите *username* и *password* для Postgress
  * Измените в файле deploy.cmd переменную *tomcat*, на папку, в которую установили Tomcat
  * В консоли перейдите в папку с проектом и выполните команду `gradle deploy` 
  * Дождитесь старта Tomcat и в браузере перейдите по ссылке [http://localhost:8080/lodegro/](http://localhost:8080/lodegro/)
