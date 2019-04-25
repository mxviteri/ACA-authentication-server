# MongoDB Introduction

## Setup
Fork and clone this repo

Enter your connection string for `Mongoose` in the appropriate place in `index.js`

Run `npm i` & `npm run start:dev`

NOTE: notice the ":dev". Make sure you run the above command exactly as written

## Investigation

Look at the functions in `express/controllers`. Notice that all the functions have already been created for you. In this exercise, we will just focus on the routes. 

### Part 1

Create an `isAuthenticated` function like shown in the slides. The function should determine the presence of the `id_token` cookie and take the appropriate action.

If there is no `id_token`, return the word `Unauthorized` with a `401` status code.

If there is a token, parse it and attach the user to the request (ex. `req.user`)

### Part 2

Create a `put` route to `/user` and have it call `AuthController.UpdateUser` with the appropriate parameters. Remember to attach the `isAuthenticated` middleware. 

Create a `put` route to `/password` and have it call `AuthController.UpdatePassword` with the appropriate parameters. Remember to attach the `isAuthenticated` middleware. 

Do the routes work? Can you update your username and password?

Log out and log back in with your new credentials

### Part 3

Go the "Application" tab in the dev tools and remove the cookie but don't refresh the page. Try to submit an update to the username or password again. What happens? Why?