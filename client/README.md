# Client

The client-side portion of the web-template-viewer app, written using the [Angular](https://angular.io) framework.

## Setup

* cd to client folder
* Run `npm ci` to install all required app dependencies.

## Running the server

* Run `ng serve` to start the server. Once running, the app will be available at [http://localhost:4200]().


## For Future Consideration

Similar to with the API implementation, there are some things that I did not pursue as a part of this Client work. Below are some thoughts on what I would do differently for either a production implementation or more complex use case

* At a minimum, include Typescript and scss linting, unit tests for all ts files.
* I'd probably broken this up into multiple tickets/branches, at a minimum a separate effort for creating the inital application enviroment, getting env set up, & etc., and finish that work before implementing the features requested
* This could have been implemented without rxjs, which would have eliminated some of the complexity including the need for subscription management; I generally like using rxjs to ease managing changing values in dependent (child) components so decided the complexity was worth the tradeoff

