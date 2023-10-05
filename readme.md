# SOCIAL-APP

This file contain the code to a functional
backend of a social web application that allows users to interact by sharing posts and messages

# TABLE OF CONTENCTS

-[installation](#installation) -[Usage](#usage) -[configuration](#configuration) -[contact information](#contact-information)

# installation

To set up the project, follow these steps:

1. clone this repository.
2. Run `npm install` to install all dependencies and libraries.

# usage

1. signup by making a post request to
   `/api/auth/signup`
   with the following details in the request body:

```json
{
  "firstName": "smart",
  "lastName": "sly",
  "email": "slyvesterobus@gmail.com",
  "profile": {
    "userName": "smartbillions",
    "bio": "i am a web developer",
    "profileType": "public"
  },
  "phoneNumber": "091434367556372",
  "password": "88888888888"
}
```

````

 2. After signing up, an activation link will be sent to your email. click on the link to activate your account.

 3. Login using your username/email and password with a POST request to `api/auth/login`.

 ```json
 {
   "email":"billions",
   "password":"22222222222"
 }
 ```
 ````

After logging in, you'll have permission to access various features, including:

# View Your Profile

- **Method:** GET
- **Endpoint:** `/profile/profile`
- **Access:** Private

#Follow a Profile/ Unfollow a profile

- **Method:** POST
- **Endpoint:** `/profile/follow`
- **Access:** Private
- **Request Body:**

```json
{
 "userName": "john"
}
```

# View Following

- **Method:** GET
- **Endpoint:** `/profile/following`
- **Access:** Private

# View Followers

- **Method:** GET
- **Endpoint:** `/profile/followers`
- **Access:** Private

### Find a Profile

- **Method:** POST
- **Endpoint:** `/profile/find`
- **Access:** Public
- **Request Body:**

```json
{
 "userName": "john"
}
```

### View Follow Requests (for accounts with profileType = private)

- **Method:** GET
- **Endpoint:** `/profile/follow-requests`
- **Access:** Private

### Manage Follow Requests (for accounts with profileType = private)

- **Method:** POST
- **Endpoint:** `/profile/follow-requests/action`
- **Access:** Private
- **Request Body:**

```json
{
 "username": "john",
 "action": "accept"
}
```

### Edit Profile

- **Method:** PUT
- **Endpoint:** `/profile/edit`
- **Access:** Private
 (put in the the name of the property you wish to change)

To change username, use the request body:

```json
{
 "userName": "john"
}
```

To change bio, use:

```json
{
 "bio": "this is my bio"
}
```

### Home Page

- **Method:** GET
- **Endpoint:** `/users/home`
- **Access:** Private

### Filter posts by topic ( Home Page)

- **Method:** POST
- **Endpoint:** `/users/home/search`
- **Access:** Private

```json
{
 "title": "math"
}
```

### Send message

- **Method:** POST
- **Endpoint:** `/message/:userId`
- **Access:** Private

```json
{
 "textMessage": "hello"
}
```
### Get messages
- **Method: GET
- **Endpoint:** `/message/:messageId/view`
- **Access:private

### Create group

- **Method:** POST
- **Endpoint:** `/message/create/group`
- **Access:** Private

```json
{
 "userNames": ["john", "alfred", "kevin"]
}
```

### Message group

- **Method:** POST
- **Endpoint:** `/message/:groupId/message`
- **Access:** Private

```json
{
 "textMessage": "hello group members"
}
```

### Make a post

- **Method:** POST
- **Endpoint:** `/api/post`
- **Access:** Private

```json
{
 "title": "education",
 "content": "testing new post schema"
}
```

### Like a post/unlike a post

- **Method:** PUT
- **Endpoint:** `/api/post/:postId/like`
- **Access:** Public

### Comment on a post

- **Method:** PUT
- **Endpoint:** `/api/post/:postId/comment`
- **Access:** Public

```json
{
 "message": "testing comment"
}
```

### Delete a post

- **Method:** DELETE
- **Endpoint:** `/api/post/:postId/delete`
- **Access:** Private

### Delete a comment

- **Method:** DELETE
- **Endpoint:** `/api/post/delete/:commentId`
- **Access:** Private

### Forgot password

- **Method:** POST
- **Endpoint:** `/api/auth/forgot-password`
- **Access:** Private

### Edit account

- **Method:** PUT
- **Endpoint:** `/api/auth/edit`
- **Access:** Private
 (provide the name of the property you wish to change along with your password)

```json
{
 "firstName": "Devin",
 "password": "1234567890"
}
```

### block account
- **Method:** PUT
- **Endpoint:** `api/auth/block-account`
- **Access:** Private

### Log-out

- **Method:** DELETE
- **Endpoint:** `/api/auth/logout`
- **Access:** Private

### Delete account

- **Method:** DELETE
- **Endpoint:** `/api/auth/delete`
- **Access:** Private

```

```

# configuration
To run the code you would need the following
MONGO_URI=
PORT =
SMTP_HOST=
SMTP_PORT=
SMTP_MAIL=
SMTP_PASSWORD=
LIVE_CLIENT_URL=
````
