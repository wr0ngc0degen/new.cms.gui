'use strict';

var cmsApp = angular.module('cmsApp', ['ui.router', 'ngResource', 'treeControl', 'xeditable']);
	cmsApp.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
            	editorName : 'New CMS',
            	editorDescription : 'Tool for managing Integrity content',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HomeController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the diseases page
            .state('app.diseases', {
                url:'diseases',
            	editorName : 'Disease',
            	editorDescription : 'Disease Editor',
                views: {
                    'content@': {
                        templateUrl : 'views/diseases.html',
                        controller  : 'DiseaseController'                  
                    }
                }
            })
        

            // route for the therapeutic activities page
            .state('app.theract', {
                url:'theract',
            	editorName : 'Therapeutic Activities',
            	editorDescription : 'Therapeutic Activities Editor',
                views: {
                    'content@': {
                        templateUrl : 'views/theract.html',
                        controller  : 'TherActController'                  
                    }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    })
;

cmsApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $rootScope.editorName = toState.editorName;
        $rootScope.editorDescription = toState.editorDescription;
    });
}]);

cmsApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});