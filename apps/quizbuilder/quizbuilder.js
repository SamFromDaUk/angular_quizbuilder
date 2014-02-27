steal(function() {
    window.Frog = window.Frog || {};
}).then(function() {
    /**
     * Quizbuilder Module
     */
    Frog.QuizBuilder = angular.module('QuizBuilder', ['ngRoute']);

    Frog.QuizBuilder.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/create', {
            controller: 'Details',
            templateUrl: 'apps/quizbuilder/views/details.html'
        });

        $routeProvider.when('/edit/:id', {
            controller: 'Details',
            templateUrl: 'apps/quizbuilder/views/details.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/create'
        });
    }]);

    Frog.QuizBuilder.filter('placeholder', function() {
        return function(text, placeholder) {
            return text || placeholder;
        };
    });

    Frog.QuizBuilder.factory('keyStageService', function() {
        return {
            get: function() {
                return $.getJSON('apps/quizbuilder/fixtures/keystages.json');
            }
        };
    });

    Frog.QuizBuilder.factory('subjectService', function() {
        return {
            get: function() {
                return $.getJSON('apps/quizbuilder/fixtures/subjects.json');
            }
        };
    });

    Frog.QuizBuilder.factory('quizService', function() {
        return {
            get: function(id) {
                return $.getJSON('apps/quizbuilder/fixtures/getQuiz.json');
            }
        };
    });

    Frog.QuizBuilder.directive('inputChange', function() {
        return function(scope, element) {
            element.bind('change', function(event) {

            });
        };
    });
}).then(
    './js/core_controller.js',
    './js/details_controller.js',
    './js/questioncreator_controller.js',
    './css/core.css',
    './css/details.css'
);