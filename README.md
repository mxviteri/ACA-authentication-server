# MongoDB Introduction

## Setup
Fork and clone this repo

Enter your connection string for `Mongoose` in the appropriate place in `index.js`

Run `npm i` & `npm run start:dev`

NOTE: notice the ":dev". Make sure you run the above command exactly as written

## Investigation
Look at the auth route (`routes/auth`) and controller (`controllers/auth`). Notice the SignUp function and how we created a hash for the password. 

### Part 1 - Signup

Once the application is running, sign up with a couple username/password combinations. Then navigate to your MongoDB Atlas database in the browser and look in the `auth` collection to see the users you just created.

### Part 2 - Login

Create a login route and a login controller function. On login, a `POST` request will be sent to `/auth/login` with the request body (you don't have to configure that part). See steps below:

In the controller, use the `AuthModel` to `findOne` user by it's `userName` and `password`. Remember to hash the password first.

In the route, send back the appropriate response from the `Login` function. If the user exists, return a TOKEN containing the user data and using the string "secret" as the secret. Learn how to creat tokens here: https://www.npmjs.com/package/jsonwebtoken

If the user doesn't exist, return a 404 status code and the string: "user could not be found"

If done correctly, you should notice that when you login, you are redirected to the dashboard page

### Part 3 - Maintaining state in the browser

Notice that when you login, you are redirected to the dashboard page but when you refresh the page, the data is gone. Why?

We need to store a cookie in the browser that tells our application a user is still logged in.

In the Login component under the client folder (`client/src/components/auth/Login.js`) find the word `token` on line 44. Right below that.. set a cookie with a name of `id_token` and a value of `token`. Also, set a `max-age` of 60 seconds

Setting cookies: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

Now, on next login, you should be able to inspect the window, navigate to the `Application` tab and dropdown the `cookies` folder. There you should see your new `id_token` cookie.

Feel free to copy the token and paste it here to see it's contents: https://jwt.io/

Wait 1 mins and then refresh the page. Notice the cookie has expired.

### Part 4 - React Private Routes

Now that the cookie is set, we want to create private routes that you cannot access unless you are logged in. Additionally, these routes will help us take the cookie from the browser and parse out the user on each request to a given component.

In the router (`client/src/router.js`) create a PrivateRoute function and use it with the dashboard. Then, login and notice that when you refresh, you are still on the dashboard. Wait for the cookie to expire and refresh the page again. Were you redirected to the login screen?

NOTE: You may have noticed when you refreshed that the data had disappeared again. We will talk about fixing that (making sure the user is always available when the cookie is) next time. 

