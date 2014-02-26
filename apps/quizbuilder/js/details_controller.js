/**
 * Details Controller
 * @param  {Object} $scope Angular scope
 */
Frog.QuizBuilder.controller('Details', ['$scope', '$routeParams', 'keyStageService', 'subjectService', 'quizService', function($scope, $routeParams, keyStageService, subjectService, quizService) {

    // if ($routeParams.id) {
    //     quizService.get(id).done(function(quiz) {
    //         $scope.quiz = quiz;
    //     });
    // }

    keyStageService.get().done(function(keyStages) {
        $scope.keyStages = keyStages;
        $scope.$digest();
    });

    subjectService.get().done(function(subjects) {
        $scope.subjects= subjects;
        $scope.$digest();
    });

    $scope.moveValidationClass = function(event) {
        var input = $(event.currentTarget),
            isValid = input.hasClass('ng-dirty') && input.hasClass('ng-invalid');

        input.closest('div.form-group').toggleClass('has-error', isValid);
    };
}]);