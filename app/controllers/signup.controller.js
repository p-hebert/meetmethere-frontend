(function(){
  angular.module('app.controllers')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['DataGatewayService'];

    function SignupController(DataGatewayService){
      var vm = this;
      var route = "";
      vm.email='';
      vm.username='';
      vm.pwd='';
      vm.cpwd='';
      vm.submit = submit;

    /////////////////////

      function submit(){
        console.log(vm);
        if(!vm.email){
          error();
        }else if(!vm.username){
          error();
        }else if(!vm.pwd){
          error();
        }else if(vm.pwd !== vm.cpwd){
          error();
        }else{
          var payload = {
            email: vm.email,
            username: vm.username,
            pwd: vm.pwd,
          };
          return DataGatewayService.post(route, payload);
        }

      }

      function error(field){

      }

    }
})();
