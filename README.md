## PG Application

PG application is an Backend App made via express and nodejs. It gives the facility to users to search a pg which will have certain rooms.

## Description 

You can do CRUD operations on the buldings, rooms, amenities, tenants, reviews.
Buildings can have name, address, landmark, type(ladies, gents or coed), maximum and minimum price of a room and amenities.
Room can be alloted to a specific building and can have its own number, sharing type and price.
Tenant can be alloted to a specific building and a room and will have a adhaar, mobile number, email, name, pan and can also give a rating.
Amenities can be created so that they can be added on to the the specific room or building.
Reviews have title and description, and they can only be created by a specific user.

## Dependencies

1. express: "^4.17.1", // npm install express
2. mongoose: "^4.13.20" // npm install mongoose
3. nodemon // npm install nodemon

## Available Scripts

In the project directory, you can run:

### `nodemon index.js`

Runs the app in the development mode.<br />
Open [http://localhost:3010](http://localhost:3010) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
