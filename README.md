# Cypress Automation

Automation suite created with [**cypress automation framework**]((https://www.cypress.io)).

## Installation

For run the automation suite you must install the following tools:

- [Node](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [cypress](https://www.cypress.io)
- [GIT](https://github.com)
- [Mocha](https://www.npmjs.com/package/mochawesome)

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install [cypress](https://www.cypress.io).

```bash
npm install cypress
```

## Usage

- Install Node, npm , cypress and git
- Download the repository of [QA Automation](https://github.com/marcomatutehn/qa-automation)
- Open package.json and run the following command:
```

npm install

```
- To open the test suite in headless mode type in terminal:

```

npm run cypress:run

or

./node_modules/.bin/cypress run

```
- To open the suite in visual mode type in terminal:

```
npm run cypress:open

or

./node_modules/.bin/cypress open

```

- To run the suite reports on console mode type in terminal:

```
cypress run --reporter mochawesome
```


For more information you can visit [cypress documentation](https://docs.cypress.io/guides/guides/command-line#Installation).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

