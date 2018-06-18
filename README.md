API Automation
====================
***

Project to create automation tests of APIs with [Mocha](https://mochajs.org/) bringing [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) to JavaScript.

## Requirements

- Node version 7 or higher

Although this project works fine with NPM we recommend to use Yarn (>= 0.20.0) instead,  due to its speed & solid dependency locking mechanism. To keep things simple we use yarn in this guide, but feel free to replace this with NPM if that is what you are using.

## Quick start

Choose one of the following options:

1. Download the latest stable release or clone the git repo — `git clone repoName`

2. Then:
- Copy the files to your project into a directory like `/apiAutomation`

3. Install the dependencies (`yarn install`) or (`npm install`)

Now you are ready to write your own tests.

# How to write a test

Tests are written in [Mocha BDD syntax](https://mochajs.org/)


__myFirstTest.js__
```mocha
describe('My First test', () => {
    let app = 'My first test';
    it('should pass', () => {
      app.should.equal('My first test')
    });
});

```

# How to run the test

Traverse to the project directory

```sh
$ cd apiAutomation
```

To run your tests just call :

```sh
$ npm test
```

# Configurations

To configure your tests, checkout the [`setup.js`] file in your test directory.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `setup` to set all general configs (in mochaOpts) that don't change.
They act as default values. For each different environment you can create a new setup with the following name
scheme:

```txt
setup.<ENVIRONMENT>.js
```
and then accordingly require it in your mocha.opts file using
```txt
--require ./test/setup.js
```

# Running single test
Sometimes its useful to only execute a single test file, to do so use the following command:

```sh
$ npm test --grep nameOfSuite (nameOfSuite is the name of describe or it block)
```

# Skip test

If you have failing or unimplemented tests you can mark them as "skip" so they will get skipped.

```javascript
describe.skip();
it.skip();
```

# Assertions

To assert values this project comes with a [Chai](http://chaijs.com/) integration.

# Logger

[Winston](https://github.com/winstonjs/winston) is used as logger in the project. Use the below command to get logs on console while running tests- 
```sh 
logLevel='debug' npm test
```
Supported log levels are-
```
{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
```
To use logger, use any of the below format with respective logLevels-

```javascript
// Default logger
winston.log('info', "127.0.0.1 - there's no place like home");
winston.info("127.0.0.1 - there's no place like home");
```
To use winston's inbuilt logger module(project uses winston directly), make the configuration as -
``` javascript
var winston = require('winston');
var logger = new (winston.Logger)({
  levels: {
    trace: 9,
    input: 8,
    verbose: 7,
    prompt: 6,
    debug: 5,
    info: 4,
    data: 3,
    help: 2,
    warn: 1,
    error: 0
  },
  colors: {
    trace: 'magenta',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    debug: 'blue',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    error: 'red'
  }
});

logger.add(winston.transports.Console, {
  level: 'trace',
  prettyPrint: true,
  colorize: true,
  silent: false,
  timestamp: false
});

logger.add(winston.transports.File, {
  prettyPrint: false,
  level: 'info',
  silent: false,
  colorize: true,
  timestamp: true,
  filename: './nKindler.log',
  maxsize: 40000,
  maxFiles: 10,
  json: false
});
```

# Reporter

The project uses two reporters-
1. [mocha-allure-reporter](https://github.com/allure-framework/allure-mocha) - It generates report and runs a server to display all the reports.
To see the allure report-
```sh
npm run report
```

2. [spec reporter](https://mochajs.org/#reporters)- It is the default mocha reporter to display report on the terminal.

Use of more than one reporter has been made possible by using [mocha-multi](https://github.com/glenjamin/mocha-multi)

# Api Documentation
The project uses [apiDoc](http://apidocjs.com/) to document the Apis. To generate and see the api documentation use-
```sh
npm run generateDocument
```