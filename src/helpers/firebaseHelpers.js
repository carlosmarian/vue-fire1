import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {        
				apiKey: "AIzaSyC6tEku5QgXDqP5GjK4ruAMV1MMsTngJRg",
				authDomain: "vuefiretodo.firebaseapp.com",
				databaseURL: "https://vuefiretodo.firebaseio.com",
				storageBucket: "vuefiretodo.appspot.com",
				messagingSenderId: "156276635439"

	}
	firebase.initializeApp(config)

	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	    func(true, user)
	  } else {
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	})
}