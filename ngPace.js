'use strict';

angular.module('chiang.ngPace', [])
    .factory('$ngPace', ['$window', '$rootScope', function ($window, $rootScope) {
        var pace = $window.Pace;
        //public methods
        $rootScope.ngPace = {};
        $rootScope.ngPace.isloading = true;
        $rootScope.ngPace.visble = {'true': 'visble'};
        //var targetElement = document.querySelector('body');
        //this.el = document.createElement('div');
        //this.el.className = "ng-pace";
        //this.el.innerHTML = '<div class="pace-mask" ng-class="ngPace.visble[!ngPace.isloading]"></div>';
        //targetElement.appendChild(this.el);
        var self = {
            pace: pace,
            startloading: function () {
                $rootScope.$apply(function () {
                    $rootScope.ngPace.isloading = true;
                    $rootScope.ngPace.iserror = false;
                    $rootScope.ngPace.isnone = false;
                });
            },
            endloading: function () {
                $rootScope.$apply(function () {
                    $rootScope.ngPace.isloading = false;
                    $rootScope.ngPace.iserror = false;
                    $rootScope.ngPace.isnone = false;
                });
            }
        }
        self.pace.on("start", function () {
            self.startloading();
        });

        self.pace.on("done", function () {
            self.endloading();
        });
        return self;
    }]);

