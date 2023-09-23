# SOCIAL-APP
This file contain the code to a functional
backend of a social web application that allows users to interact by sharing posts and messages

# TABLE OF CONTENCTS

-[installation](#installation)
-[Usage](#usage)
-[configuration](#configuration)
-[contact information](#contact-information)

# installation

Run "npm i" to install all dependencies and libraries

# usage
 first thing to do is to signup using the route
 (http://localhost:4400/api/auth/signup)
 and providing the necessary information example:{
    "firstName":"smart",
    "lastName":"sly",
    "email":"slyvesterobus@gmail.com",
    "profile":{
        "userName":"smartbillions"
    },
    "phone":"234912220224,
    "password":"8888888888"
 },
 after signing up an activation link will be sent in an email ,click on the link to activate your account then login using your username/email and password on the route(http://localhost:4400/api/auth/login)
after logging in you are able to do many things such as follow a profile,make a post comment and like a post,send messages,create groups and others

# configuration
To run the code you would need the following
MONGO_URI=
PORT =
SMTP_HOST= 
SMTP_PORT= 
SMTP_MAIL= 
SMTP_PASSWORD= 
LIVE_CLIENT_URL=
