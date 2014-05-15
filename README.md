# grunt-fontello-update

> Grunt task for updating Fontello files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-fontello-update --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fontello-update');
```

## The "fontello_update" task

### Overview
In your project's Gruntfile, add a section named `fontello_update` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fontello_update: {
    options: {
      config: 'fontello.json',
    },
  },
});
```

### Options

#### options.config
Type: `String`
Default value: `'config.json'`

The Fontello config file to update.

#### options.fonts
Type: `String`
Default value: `'fonts'`

Destination directory for the font files in the Fontello package.

#### options.css
Type: `String`
Default value: `'css'`

Destination directory for the css files in the Fontello package.

#### options.overwrite
Type: `Boolean`
Default value: `true`

Overwrite existing files.

#### options.open
Type: `Boolean`
Default value: `false`

Open the package on the fontello website.

#### options.session
Type: `String`
Default value: `null`

The session to use.

#### options.updateConfigOnly
Type: `Boolean`
Default value: `false`

Only update the config file.

## Release History
_(Nothing yet)_
