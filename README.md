# Readable

[![REACT nanodegree](https://img.shields.io/badge/udacity-REACTND-02b3e4.svg?style=flat)](https://br.udacity.com/course/react-nanodegree--nd019)

> Content and comments web app built with React and Redux.

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

- `npm run start`: runs the app in development mode
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

Click [here](https://readable-react-redux.herokuapp.com/) for the live version of this app.

## Running the tests

Explain how to run the automated tests for this system.

## Deployment

This is how to deploy using Google Cloud:
1. Create a Compute Engine and an instance of it
2. Configure the firewall to enable port `3001`
3. In this instance, repeat what's done in [Installing](#installing)
4. Install forever with `sudo npm install forever`
5. Go to `./api-server` and run `forever server.js` so the back-end keeps running ~~forever~~
6. Remove Apache's `index.html` with `cd /var/www/html/` then `rm index.html`
7. Go to `./frontend/build` and move its contents to Apache with `sudo cp -r * /var/www/html/`
8. Open your instance's external IP in a browser and that's it!

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Router](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps
* [react-redux](https://github.com/reactjs/react-redux) - Official React bindings for Redux

## Contributing

Please read [CONTRIBUTING](https://github.com/calaca/reactnd-readable/blob/master/CONTRIBUTING.md) for details on the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/calaca/reactnd-readable/blob/master/LICENSE) file for details
