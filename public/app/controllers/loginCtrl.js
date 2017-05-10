angular.module('loginCtrl', [])

.controller('loginController', function($location) {

  let vm = this;

  vm.logIn = function() {
    let email = vm.userData.email;
    let password = vm.userData.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    });
  }
  
});
