### Project Description

In this project, I have created a calendar module. 
In the calendar month, week and day grids are available.
The events are showing the calendar according to the date and time.

Here i am not getting the calendar events data from the API, instead i have created an asynchronous function using setTimeout in the action. From that I am getting the static events data.

### Project structure

    /calendar-app
    |- /node_modules
    |- /public
        |- index.html
    |- /src
        |- /assets
        |- /common
            |- /action
            |- /constant
            |- /model
            |- /reducer
        |- /components
            |- /layout
            |- /calendar
        |- index.ts
        |- rootReducer.ts
        |- router.ts
        |- store.ts
    |- package.json
    |- tsconfig.json
    |- webpack.config.js


### Technologies used

1. React
2. Redux
3. Typescript

### Libraries used

1. Material UI
2. React Full calendar
3. Redux
4. React Redux
5. Redux Think

### Run the project by executing following steps

1. Clone the project
2. npm install
3. npm start
