import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {        
				apiKey: "xxxxxxxxxxxxxxx",
				authDomain: "xxxxxxxxxxxxxxxxx",
				databaseURL: "XXXXXXXXXXXXXXXXX",
				storageBucket: "XXXXXXXXXXXXXXXXXXXX",
				messagingSenderId: "XXXXXXXXXXXXXXXXXX"

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