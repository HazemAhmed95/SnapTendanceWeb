angular.module('mainCtrl', [])

	.controller('mainController', function ($location, $rootScope) {

		let vm = this;
		vm.lecture = {
			CourseName: "testt",
			Dept: "",
			Time: ""
		};
 vm.students 
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				vm.user = user;
				console.log("logged in");
				vm.isLoggedIn = true;
				$rootScope.$apply(function () {
					$location.path("/");
				});
			} else {
				vm.isLoggedIn = false;
			}
		});

		vm.logOut = function () {
			firebase.auth().signOut().then(function () {
				vm.isLoggedIn = false;
				$location.path('/login');
			}).catch(function (error) {
				alert(error);
			});
		}

		firebase.auth()
		vm.showLectureForm = function () {

			vm.showform = true;
		}

		vm.getQRCode = function () {
			console.log(vm.lecture);
			let newLectKey = firebase.database().ref().child("/lectuers/").push().key
			//add the lectuer ID under the proff
			firebase.database().ref("/lectuers/" + newLectKey)
				.set({
					CourseName: vm.lecture.CourseName,
					Dept: vm.lecture.Dept,
					Time: String(vm.lecture.Time),
					ProfID: vm.user.uid
				})
				.then(function () {
					alert("lecture added");
					vm.showform = false;
				})

			//construct the QR code 
			vm.QRcode = "http://api.qrserver.com/v1/create-qr-code/?data=" + newLectKey + "&size=500x500"

		}
		firebase.database().ref("lectuers/-Kjmu7S5TU_Fwyl9jvH1").on('value',function(snapshot){
 vm.students = snapshot.val().students;
 vm.arr = Object.keys(vm.students).map(function (key) { return vm.students[key]; });

 console.log( vm.arr);
		})
	});


