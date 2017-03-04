import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/login-form';

class App extends Component{

	state = {loggedIn: false}

	componentWillMount(){
			firebase.initializeApp({
    			    apiKey: "AIzaSyDjY69kRljPh48X3DSTfV9sMQgKFf_t2gY",
    				authDomain: "loginapp-7855b.firebaseapp.com",
    				databaseURL: "https://loginapp-7855b.firebaseio.com",
    				storageBucket: "loginapp-7855b.appspot.com",
    				messagingSenderId: "837085542112"
			});

			//Uses to check if the user is authenticated
			firebase.auth().onAuthStateChanged((user) => {
				if(user){
					this.setState({loggedIn: true});
				}else{
					this.setState({loggedIn: false});
				}
			});

	}

	renderContent(){
		if(this.state.loggedIn){
			return(
				<View style={styles.itemStyle}>
				<Button handlePress={() => firebase.auth().signOut()}>
					Log out
				</Button>
				</View>
				);
		}

		return <LoginForm/>
	}

	render(){

		return(
			<View>
				<Header headerTitle="Login Form"/>
				{this.renderContent()}
			</View>
			);
	}
}

const styles = {
	containerStyle: {

		borderWidth: 1, // Provide the border
		borderRadius: 2, //Round the Corners 
		borderColor: '#ddd',
		borderBottomWidth: 0, //Zero the bottom border

		shadowColor: '#000', //provide a elevation
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1, //Ligthen the transparency
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},

	itemStyle: {
		borderBottomWidth: 1,
		padding: 5, //spacing
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'

	}
};

export default App;