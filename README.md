# wrightplay-demo

This repo provides an example of how to structure your project for testing web applications using the [wrightplay](https://github.com/PaperStrike/wrightplay) test framework. It includes sample source code and test files to demonstrate the framework's capabilities.

## Demo Structure

### `/src`

The `src` directory contains the following file:

#### `getGeoLocation.ts`

This file exports a function that simply uses the browser [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to obtain the browser's geographical location.

### `/test`

The `test` directory contains the following test files:

#### `setup.ts`

`setup.ts` is used to configure the [Mocha](https://www.npmjs.com/package/mocha) test framework for testing. You can find examples showing integration with other test frameworks [here](https://github.com/PaperStrike/wrightplay#working-with).

#### `geo.test.ts`

`geo.test.ts` is designed to test the functionality in `getGeoLocation.ts`. It showcases how wrightplay can be used to write tests for specific components or features.

#### `handle.test.ts` and `route.test.ts`

`handle.test.ts` and `route.test.ts` are additional test files to demonstrate how wrightplay can be used to test other core functions or components in your application.

### `/.wrightplayrc.ts`

`.wrightplayrc.ts` is used to specify the configuration for wrightplay. It is used to configure the test environment and specify the test files to be executed.

## Getting Started

To get started with this demo:

1. Clone this repository to your local machine.

2. Install the necessary dependencies:

    ```shell
    npm install
    ```

3. Install the Playwright browsers:

    ```shell
    npx playwright install
    ```

    Optionally, specify the browser to install:

    ```shell
    npx playwright install chromium # OR firefox, webkit
    ```

## Running Tests

Run the tests by invoking the wrightplay cli:

```shell
npx wrightplay
```

Optionally, specify the browser to use:

```shell
npx wrightplay --browser chromium # OR firefox, webkit
```

Optionally, run the tests with native V8 coverage tools like [c8](https://www.npmjs.com/package/c8):

```shell
npx c8 -a npx wrightplay
```
