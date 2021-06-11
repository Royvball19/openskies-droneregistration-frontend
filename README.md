
# Drone registry frontend

This project was created with React.js. The following packages are required to run the application: 

 - Boostrap (Style framework)
 - Axios (Http request handler)
 - Nivo (Charts package)
 - Fuse.js (Search framework)
 - Moment (Date formatter)
 - i18next (Language framework)

## How to get started

To install all required packages run:

### `yarn install` or `npm install`

After you installed all the required packages run the app with:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

If you want to make a build of the react app run the following command:

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More
Here you can find more information about our application and how to work with it.

### Known issues
This is a list of all the known bugs:
 - Responsiveness

### Future features
This is a list of future features:
 - Filter that can compare numbers (equals, greater then, less then, etc)
 - Fiter that can compare dates
 - Make Operator, Pilot, Aircraft detail pages flexible like reports details
 - Alert toast global on error handling like in searchinterfaceview
 - Feature to export information and charts from the registry (Print export as pdf etc)
 - Flags on certain amount of reports to show where alot of issues are generated
 - Save searched items to dashboard as widget
 - Tracked items (favorite items)
 - Soon to expire languages 

### Connect frontend to existing backend

To connect your existing backend to our frontend you need to provide all fields from the objects of the database. You need to make some changes in the data.js file so the endpoints match your backend. Our application is made so it loads in data based on the provided fields from the backend.

Required fields to work with the frontend:
 - key
 - type
 - title


The fields should look something like this:

    "fields": [
        {
            "required": false,
            "key": "id",
            "schema": {
                "title": "id",
                "type": "string",
                "default": "e581157a-216d-4782-a7a8-792bf998fc92"
            },
            "ui": {
                "ui:readonly": true
            }
        },
        {
            "required": false,
            "key": "created_at",
            "schema": {
                "title": "created at",
                "type": "string"
            },
            "ui": {
                "ui:widget": "date-time",
                "ui:readonly": true
            }
        },
        {
            "required": false,
            "key": "updated_at",
            "schema": {
                "title": "updated at",
                "type": "string"
            },
            "ui": {
                "ui:widget": "date-time",
                "ui:readonly": true
            }
        }
    ],


### Join our community

We have setup a slack server where you can join and talk with the community. Do you have any questions or remarks? Please join our slack community.

You can find the slack server on this link: https://join.slack.com/t/aircraft-registry/shared_invite/zt-rgizb7td-fx2eM_nlp38fLyzhpiODkA