'use strict';

angular.module('cmsApp')

        .constant("baseURL", "http://localhost:3005/")
        .service('diseaseService', ['$resource', 'baseURL', function($resource, baseURL) {
/*                this.getDishes = function(){
                    
                    return $resource(baseURL + "dishes/:id", null, {'update':{method: 'PUT'}});
                    
                };
*/
                this.getDisease = function(){

                  return $resource(baseURL + "diseases/:id", null, null);
                };
        
                this.getTree = function(){
                  return $resource(baseURL + "tree/", null, null);
                };
    
                        
        }])
        .service('therActService', ['$resource', 'baseURL', function($resource, baseURL) {

                this.getTree = function(){
                  return $resource(baseURL + "therapeuticActivity/", null, null);
                };    
                        
        }])
;