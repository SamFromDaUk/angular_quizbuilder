/**
 * Core Controller
 * @param  {Object} $scope Angular scope
 */
Frog.QuizBuilder.controller('Core', function($scope) {
    $scope.quiz = {
        title: '',
        keystage: '',
        subject: '',
        instructions: '',
        questions: []
    };

    $scope.canProceed = false;

    $scope.showHelp = function() {
        console.log('@todo show help');
    };

    $scope.questionCreator = function() {

    };

    $scope.closeBuilder = function() {
        console.log('@todo close builder');
    };
});