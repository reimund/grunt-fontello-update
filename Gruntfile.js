/*
 * grunt-fontello-update
 * https://github.com/reimund/test
 *
 * Copyright (c) 2014 Reimund Trost
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Load grunt tasks automatically.
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Configuration to be run (and then tested).
		fontelloUpdate: {
			default_options: {
				options: {},
			},
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	grunt.registerTask('test', ['fontelloUpdate']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
