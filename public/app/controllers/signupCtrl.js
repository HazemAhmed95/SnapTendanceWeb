angular.module('signupCtrl', [])

.controller('signupController', function() {

  let vm = this;

  vm.createUser = function() {
    let name = vm.userData.name;
    let email = vm.userData.email;
    let password = vm.userData.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    });
  }

});
