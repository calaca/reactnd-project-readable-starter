# Readable

[![REACT nanodegree](https://img.shields.io/badge/udacity-REACTND-02b3e4.svg?style=flat)](https://br.udacity.com/course/react-nanodegree--nd019)

> Reddit-like web app built with React and Redux.

## Getting Started

Clone this repository in your computer:

```
$ git clone https://github.com/calaca/reactnd-readable.git
```

Or [download](https://github.com/calaca/reactnd-readable/archive/master.zip) it as a ZIP file.

### Prerequisites

You'll need to install Node and NPM (they come together when you install Node): [NodeJS - Downloads](https://nodejs.org/en/download/current/)

### Installing

Open a terminal at the project root:
1. `cd api-server`
2. `npm install`
3. `cd ../frontend`
4. `npm install`

### NPM scripts

- `npm start`: runs the app in development mode
- `npm run build`: builds the app for production to the `build` folder
- `npm run test`: runs the test watcher in an interactive mode
- `npm run eject`: ejects the app so you have full control over configuration files and the transitive dependencies

To run these, make sure you are at the `frontend` folder.

## Running the project

### Development

1. Open a terminal and go to `./api-server`
2. Run the server with `node server` (keep this terminal open)
3. Open another terminal and go to the client app source folder `./frontend`
4. Run the React app with `npm start`
5. Start coding!

### Production

Click [here](https://sheltered-reef-99594.herokuapp.com/) for the live version of this app.

### Deployment

- `npm start`: starts the server for deployment
- `npm run postinstall`: builds the app for production/deployment to the `build` folder

To run these, make sure you are at the *root* folder.

## Running the tests

Tests will be coming soon.

## Deployment

This is how to deploy using Heroku:
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Make changes to the project
3. Add the changes with `git add .`
4. Add a commit with `git commit -m 'deploy time!'`
5. Login to Heroku with `heroku login`
6. Create a Heroku app with `heroku create`
7. Push to Heroku with `git push heroku master`
8. Run `heroku open` to view your project in your default browser

These are all executed at root folder.

### Server Modifications

Here are the changes I had to make to `api-server/server.js` to make it serve React static files and handle API routes properly:

1. Configure a `package.json` at root folder specifying node and npm versions, plus scripts for start and post install
2. Change api routes to start with `/api`
3. Change authorization middleware to only watch routes that start with `/api`
4. Create a route to serve static files from React build folder only in production mode

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps
* [react-redux](https://github.com/reactjs/react-redux) - Official React bindings for Redux
* [Heroku](https://www.heroku.com/) - Platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud

## Contributing

Please read [CONTRIBUTING](https://github.com/calaca/reactnd-readable/blob/master/CONTRIBUTING.md) for details on the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/calaca/reactnd-readable/blob/master/LICENSE) file for details
