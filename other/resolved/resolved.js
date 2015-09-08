(function(){
  angular.module('RouterApplication').controller('resolvedCtrl', function(users){
    var vm = this;
    (function activate(){
      vm.users = users;
    })();
  });
})();