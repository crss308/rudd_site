(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Welcome to my site!! This page is currently used for testing';


    // simplest http script using jquery - ping a site using $http.get, then print the results, whatever that is. It could just as easily say "if (result) == dispense, then drop"
  //   $http.get('http://google.com')
  //     .then(result => console.log(result))

  }

})();
