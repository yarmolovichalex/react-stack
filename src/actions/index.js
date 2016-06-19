import alt from '../alt';
import Firebase from 'firebase';

class Actions {
	login(args) {
		return (dispatch) => {
			var config = {
			    apiKey: "AIzaSyBvkP9AmC5BU-JXfDOX9GLXHm7vILyj0o8",
			    authDomain: "my-first-app-8a60b.firebaseapp.com",
			    databaseURL: "https://my-first-app-8a60b.firebaseio.com",
			    storageBucket: "",
		  	};
			Firebase.initializeApp(config);

			var provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope('https://www.googleapis.com/auth/plus.login');
			Firebase.auth().signInWithPopup(provider).then(function(result) {
				debugger;
				dispatch(result.user);
			}).catch(function (error) {
				return;
			});
		}
	}
}

export default alt.createActions(Actions);