/*
 * grunt-fontello-update
 * https://github.com/reimund/grunt-fontello-update
 *
 * Copyright (c) 2014 Reimund Trost
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {

	var fontelloUpdate = require('fontello-update');

	grunt.registerTask('fontelloUpdate', 'Update font files given a fontello config', function() {

		var done    = this.async()
		  , options = this.options({
				config: 'config.json',
				overwrite: true,
			})
		;
		fontelloUpdate(this.options())
			.then(function() {
				grunt.log.ok('Successfully updated fontello fonts.');
				done();
			})
			.catch(function(err) {
				if (err) grunt.log.error(err);
			});

	});

};
