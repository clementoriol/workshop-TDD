# Workshop Test-Driven Development
**Introduction to front-end Test-Driven Development:**
- [Karma](https://karma-runner.github.io) as a test runner
- [Jasmine](http://jasmine.github.io/) as a test framework
- [Istanbul](https://github.com/gotwarlost/istanbul) for generating code coverage reports


## Project Setup
#### 1- Clone the repo
#### 2- Install dependencies
Make sure you have npm installed on your system

```
npm --version
```

then check gulp is installed globally

```
npm list -g --depth=0 | ((grep 'gulp@\(\d\.\)\{2\}\d$' && echo 'Yeah! gulp is correctly installed') || echo "ERROR: gulp is not globally installed, please run 'npm install -g gulp'")
```

should print

```
Yeah! gulp is correctly installed
```

If everything looks good, install the dependencies using

```
npm install
```

#### About the setup: ####
- The javascript files are located in `app/assets/javascripts/src`. They're written
in ES6 (ES2016) and we're using browserify to enable es6 modules.
- The specs are located in `app/spec/js`
- The html files are in the `public` folder.
- Everything is compiled to `public/` which is where the webServer serves the files from

## Workshop Objectives
In this Workshop we'll implement a simple javascript function,
`textLimiter`, which will take an html element containing text,
limit it to a specific number of characters, and add a button to
hide / show the full text.
[Screenshot](https://www.dropbox.com/s/aexzspl5n8kzmnp/Capture%20d%27%C3%A9cran%202016-03-21%2011.27.34.png?dl=0)

The main goal of the workshop will be to focus on writing tests to help
us develop the component.

We'll :
- Write the tests
- Write the component, making the tests pass one after the other
- When the component is done, and the tests are passing, we'll open
our browser to check if everything is working as intended

The main challenge will be to try implementing the component logic correctly
**without testing it in the browser** !

We'll also try attain 100% code coverage on the project

## About the textLimiter function

Our TextLimiter function will take two arguments :
```
textLimiter(selector[string], settings[object]);
```

- the `selector` argument is the selector (usually a classname or an id)
of the element(s) we need to limit the text to.

- the `settings` argument is an optional object container some settings.
```
{
	limit: number, // the number of characters to limit the text to
	button: boolean // create the button to show more,
	suffix: string // the suffix to append to the limited text
}
```
Note that the setting object is optional and the component should
fallback to default settings.

#### textLimiter specs
Here a few ideas on what to test the component for :
- It should work with default settings
- It should work with custom settings (changing the limit, the suffix...)
- It should work on multiple elements

You'll need to test that the correct DOM is created, that the text is limited
to the expected length, that the button is showing, can handle multiple clicks,
etc.

## Commands
- `gulp` to launch the server on port `5001`
- `npm run test-watch` to launch the tests and refresh them on every code change
- `npm run test` to launch the tests *once* and display the code coverage
