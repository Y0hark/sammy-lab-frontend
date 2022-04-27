## Build Status


# SammyLab Frontend

This is the frontend of my website made in NuxtJS.

Made it with NuxtJS, Axios and Vuetify. You can of course use it as you want to make you own blog-styled website.

My API is published on my own VPS and is being accessed by Axios in the ```services/api/api.js``` file. Requests are written here to be accessible from all over the application just by using ```Api.something()``` call.

### Installation

These are the very easy steps to follow if you want to use this front application: 

1. Clone the repo to you workspace
2. Enter the project's directory and run ```npm install``` to get the dependencies
3. Run ```npm run dev``` to start the project locally. The prompt will show you the port the app has been published to.
4. Make sure to switch to you own backend API link in the ```services/api/api.js``` file.