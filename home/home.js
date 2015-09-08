(function(){
  'use strict';

  angular.module('RouterApplication').controller('homeCtrl', function(){
    var vm = this;
    (function activate(){
      vm.message = "Hello, World";
    })();
    
  });
})();