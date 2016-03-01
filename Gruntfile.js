module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			dist: {
				src: ['js/1.js', 'js/2.js'],
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
		console.log("Hello World!");
	});
	
	grunt.registerTask("default", 'watch');

	grunt.loadNpmTasks('grunt-debug-task');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};