module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			dist: {
				src: ['js/first.js', 'js/second.js'],
				dest: 'build/js/scripts.js',
			},
		},
		watch: {
			js: {
				files: 'js/**/*.js',
				tasks: ['concat'],
				options: {
					interrupt: true,
				},
			},
		},
	});
	
	grunt.registerTask("log", function() {
		console.log("Hello From Grunt Task!");
	});
	
	grunt.registerTask("default", 'watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};