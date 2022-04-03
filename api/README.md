# API

The server-side portion of the web-template-viewer app, written using the [express](https://expressjs.com) framework.

## Setup

* cd to api folder
* Run `npm ci` to install all required app dependencies.

## Running the server

* Run `npm run start` to start the server. Once running, the api will be running at [http://localhost:8080]().

## For Future Consideration

Trying to balance the competing interests of demonstrating my capabilities, practicality of what is actually needed for this application,
as well as limiting the time commitment for the project, I've gone with a simple/straightforward API implementation that just serves up
the images and data as static content. Below are some thoughts on what I would do differently for either a production implementation or more
complex use case

* At a minimum, include Typescript linting and unit tests for all src files.
* The templates json files might be better served as an explicit endpoint that could do JSON validation (in the event the source of the JSON
  cannot be trusted/relied on), take a parameter input to return only the specific json data requested, basic authentication/authorization.
* Similarly, the images could be made available via an endpoint that at least has auth.
* This might allow assets to be prefected per page, allowing current & next pages to already fetched for a better, retaining previous pages, etc.
  all around resulting in a quicker/smoother user experience.
* Data and images could have been stored in a database, or separate file store; at a minimum this sort of data generally shouldn't be committed to git
  if it can't be relied on to be static (doesn't change often) and limited in size requirements.