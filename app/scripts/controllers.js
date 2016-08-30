'use strict';

angular.module('cmsApp')

        .controller('DiseaseController', ['$scope', 'diseaseService', function($scope, diseaseService) {

            $scope.dieseaseSelected = false;
            $scope.treeLoaded = false;

            $scope.treedata=diseaseService.getTree().query()
                    .$promise.then(
                            function(response) {
                                $scope.treedata = response;
                                $scope.expandedNodes = [$scope.treedata[0]];
                                $scope.treeLoaded = true;
                            },
                            function(response){
                                $scope.message = "Error: " + response.status + " " + response.statusText;                    
                            }
                        );

             $scope.lastClicked = null;

            $scope.filterBy = "";
            $scope.comparator = false;

             $scope.selectDisease = function(diseaseId) {
                    return diseaseService.getDisease().get({id:diseaseId})
                    .$promise.then(
                            function(response) {
                                $scope.disease = response;
                                $scope.dieseaseSelected = true;
                            },
                            function(response){
                                $scope.message = "Error: " + response.status + " " + response.statusText;
                                $scope.dieseaseSelected = false;                    
                            }
                        );
             };
             
             $scope.buttonClick = function($event, node) {
                 $scope.lastClicked = node;
                 $event.stopPropagation();
             };

             $scope.showSelected = function(sel) {
                 $scope.disease = $scope.selectDisease(sel.entityId);
             };

            $scope.reverse = false;
            $scope.orderby = 'entityName';

            $scope.byName = function () {$scope.orderby = 'entityName'};
            $scope.byId = function () {$scope.orderby = 'entityId'};

/*            $scope.expandButtonName = 'Expand All';
            $scope.expanded = false;


            $scope.expand = function () {
                console.log($scope.expanded);
                if($scope.expanded) 
                {
                    $scope.expandButtonName = 'Expand All';
                    $scope.expandedNodes = $scope.treedata;
                }
                else 
                {
                    $scope.expandButtonName = 'Collapse All';
                    $scope.expandedNodes = $scope.addAllChildren($scope.treedata[0]);
                }
                $scope.expanded = !$scope.expanded;
            };

            $scope.addAllChildren = function(parent){
                return $scope.addAllChildrenInt(parent, [parent]);
            };

            $scope.addAllChildrenInt = function(parent, array){
                array.push(parent.children);
                for (var i = parent.children.childrenCount - 1; i >= 0; i--) {
                    $scope.addAllChildren(parent.children[i], array);
                };
                return array;
            };
*/            
        }])
        .controller('TherActController', ['$scope', 'therActService', function($scope, therActService) {

            $scope.therActSelected = false;
            $scope.treeLoaded = false;

            $scope.treedata=therActService.getTree().query()
                    .$promise.then(
                            function(response) {
                                $scope.treedata = response;
                                $scope.expandedNodes = [$scope.treedata[0]];
                                $scope.treeLoaded = true;
                            },
                            function(response){
                                $scope.message = "Error: " + response.status + " " + response.statusText;
                            }
                        );
             
             $scope.showSelected = function(sel) {
                $scope.therActSelected = true;
                $scope.sel = sel;
             };

            $scope.reverse = false;
            $scope.orderby = 'entityName';

            $scope.byName = function () {$scope.orderby = 'entityName'};
            $scope.byId = function () {$scope.orderby = 'entityId'};

            $scope.filterBy = "";
            $scope.comparator = false;
        }])

        .controller('HomeController', ['$scope', function($scope) {

            
        }])
;