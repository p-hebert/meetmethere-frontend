(function(){
  angular.module('app.controllers')
    .controller('MeetupController', MeetupController);

    MeetupController.$inject = ['DataGatewayService'];

    function MeetupController(DataGatewayService){
      var vm = this;
      var route = "";
      var finalLocation = '';
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
