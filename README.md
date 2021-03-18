# Twitter Clone

## Description

Twitter Clone web application that implements basic Twitter functionality such as Sign Up, Login, Create Tweet, Like Tweet and Search Users.

The application was bootstrapped using create-react-app and the back-end was handled by Firebase. The app was then built and deployed to Netlify.

You can view the live version [here](https://kenwilde-twitter-clone.netlify.app/).

## Try It Yourself

Clone this project and run locally:

```
~ git clone https://github.com/kenwilde1/twitter-clone
~ cd twitter-clone/
~ npm start
```

This will run the project in development mode at localhost:3000

## Preview

### Sign Up

User can sign up using their Name, Email, Password and Profile Picture (optional). Firebase will then handle authentication.

![signup-preview](https://github.com/kenwilde1/twitter-clone/blob/main/src/images/home.png?raw=true)

### Login

User can log in Email and Password. Firebase will then handle authentication.

![login-preview](https://github.com/kenwilde1/twitter-clone/blob/main/src/images/signup.png?raw=true)

### Home

Once succesfully authenticated with Firebase Auth, the user will be brought to the home page where they can view and create Tweets.

![home-preview](https://github.com/kenwilde1/twitter-clone/blob/main/src/images/login.png?raw=true)

## Challenges Encounterd

- How to asynchronously load tweets from Cloud Firestore without affecting UX.
- How to structure the Cloud Firestore collections that would serve the data to my app.
- Ensuring a given User could only like a tweet once.
- Trying to assimilate Twitter's front-end components.
- Configure correct timestamps for tweets using EPOCH time conversion.
