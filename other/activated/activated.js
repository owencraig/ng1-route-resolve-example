(function(){
  angular.module('RouterApplication').controller('activatedCtrl', function(githubDataService){
    var vm = this;
    (function activate(){
      getTheData().then(function(result){
        vm.users = result;
      });
    })();

    function getTheData(){
      return githubDataService.getUsers(1683689);
    }
  });
})();