angular.module('martaApp')

.service('userService', function($http){
  let self = this;
  self.userSelection = '';

  // self.getuserSelection = function(){
  //   console.log('getting user selection...', self.userSelection);
  //   return self.userSelection;
  // }
  // self.setUserSelection = function(newSelection){
  //   console.log('current user selection is...', self.userSelection);
  //   console.log('setting user stop to...', newSelection);
  //   return self.userSelection = newSelection;
  // }

  self.getUser = function(){
    return $http.get('/user');
  }
})

.controller('getUsersController', ['$http', 'userService', function($http, userService){
  var vm = this;
  vm.user = {};
  userService.getUser()
  .then(function(response){
    vm.user = response.data;
    console.log(vm.user);
  })
  .catch(function(err){
    console.log(err);
  });

  //this adds favorites
  this.postUser = function(stop){
    vm.favorites = stop;
    $http.post("/users/:id", {favorites:vm.favorites})
    .then(function(success){
      console.log(success);
    })
    .catch(function(err){
      console.log(err);
    })
    vm.favorites = {};
  }

  this.removeThisFavorite = function(stop){
    vm.favorites = stop;
    $http.put("/users/:id", {favorites:vm.favorites})
    .then(function(success){
      console.log('success',success);
    })
    .catch(function(err){
      console.log('error:',err);
    })
    vm.favorites = {};
  }

  // this.setSelected = function(stop){
  //   vm.favorites = stop;
  //   console.log(vm.favorites);
  // }

      this.buses = ['10th Chs Allen','Alabama & Broad St.','Alabama & Forsyth'];


}]);
