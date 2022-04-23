# The code was written by Ben Levi(ID 318811304) and Eliran Eiluz(ID 313268146). 
# This project is demonstating a client-side web application of an instant-messaging platform(like WhatsApp), which bulit with ReactJS.
# It's the first part out of four of the project in Advenced Programming 2 course.


The client-side web application is consists of 3 pages:

1. The login page:
   The login page is the main page of the site("/"). In the login page you have the ability to login with username and password. After a successful login, you
   will be transfered to the chat page. If you are not registered, there is a link to the register page.
   
2. The register page:
   There are two ways to get to the register page. 
   1. Via the link in the login page
   2. surf to (SITE_URL\register)
   In the register page you have the ability to create a new user. You will need to enter a username, password and password verification, display name and a picture.
   The password must contain at least 8 characters, which cosnsists of at least 1 numeric charater, 1 lower-case letter and 1 upper-case letter.
   after a successful registeration, you will be transfered to the chat page.
   
 3. The chat page:
    You will be transfered to the chat page after a successful login or after a successful registeration. If you just registered, than your contacts column will be empty, 
    and you can add users to chat with by a button in the up-left side of the page. You cant send text messagees, pictures, videos and voice records.
    you can log out by clicking the log-out button or by clicking on the logo of the site. In both ways, you will be transfered to the login page.

Beacuse the site is built with reactJS, moving within pages will not refresh the page(React Router). Currently, as it's the first part of the project, 
The web-application works without a server, all the data is saved locally.
So, for a consist usage, PLEASE DO NOT REFRESH THE SITE IF YOU WANT DATA TO BE SAVED!

There are 7 hard-coded users that have chats with each other with all kind of available options of messages. you can use them as an example for the site abilities.

1. Username: Bar
Password: Aa123456

2. Username: Foo
Password: Aa123456

3. Username: Baz
Password: Aa123456

4. Username: Eliran
Password: Aa123456

5. Username: Ben
Password: Aa123456

6. Username: Boo
Password: Aa123456

7. Username: Person
Password: Aa123456

To be continued... :)
