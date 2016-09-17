(function(){
  angular.module('app.controllers')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['DataGatewayService'];

    function LoginController(DataGatewayService){
      var vm = this;
      var route = "";
      vm.email='';
      vm.username='';
      vm.pwd='';
      vm.cpwd='';
      vm.submit = submit;

    /////////////////////

      function submit(){
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
            pwd: vm.pwd,
          };
          return DataGatewayService.post(route, payload);
        }

      }

      function error(field){

      }

    }
})();
