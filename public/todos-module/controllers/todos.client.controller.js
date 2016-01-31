angular.module('todos').controller('TodosController', ['$routeParams', '$location', 'Authentication', 'Todos',
  function($routeParams, $location, Authentication, Todos) {

    var vm = this;

    vm.authentication = Authentication;

    vm.create = function() {
      var todo = new Todos({
        // MIGHT NEED TO SET this TO vm
        title: vm.title,
        comment: vm.comment
      });

      todo.$save(function(response) {
        $location.path('todos/' + response._id);
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    vm.find = function() {
      vm.todos = Todos.query();
      console.log(vm.todos);
    };
  }
]);