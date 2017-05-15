# Use gulp to inject .env variables into client

This is going to get environment variables from .env and pass them along to an Angular client.

__Details__

- The .env file goes in the root directory and looks like this:
```
NO_CAPTCHA_SITE_KEY=AnythingYouWant
```
- The gulpfile.js reads this and makes `client\config.js` that looks like this:
```
angular.module("myApp")
.constant("noCaptchaSiteKey", "...");
```
This is included in `client\index.html` so that noCaptchaSiteKey can be used in a contoller.


## How to run

After cloning the git, run:
```
npm install
```
in the root directory.  You also need to make a file `.env` in the root directory that looks something like this:
```
NO_CAPTCHA_SITE_KEY=AnythingYouWant
```
 Next, from the root directory, run the app:
```
node index.js
```
Afterwards, you should find that `client\config.js` has been created.  You can see the client key by going to `http://localhost:3000/` in your browser.
