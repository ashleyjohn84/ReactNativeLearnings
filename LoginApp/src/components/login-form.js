import React , { Component } from 'react';
import { View , TextInput, Text} from 'react-native';
import firebase from 'firebase';
import { Button } from './common';


class LoginForm extends Component {

	state = {email: '', password: '', error: ''};

	onButtonPress(){

		const { email, password, error } = this.state;

		this.setState({error: ''});
		//This returns a promise
		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.then(this.onLoginSuccess.bind(this))
					.catch(() =>{
						this.setState({error: 'Authentication Failed'});
					});	
			});
	}

	onLoginSuccess(){
		this.setState({
			email: '',
			password: '',
			error: ''
		});

	}

	render() {
		return(
			<View style={styles.containerStyle}>

			<View style={styles.itemStyle}>
				<View style={styles.wrapperStyle}>
					<Text style={styles.labelStyle}>Email</Text>
					<TextInput style={styles.inputStyle} 
								value={this.state.email} 
								onChangeText={email => this.setState({email})} 
								autoCorrect={false}
								placeholder="ashley@test.com"/>
				</View>
			</View>

			<View style={styles.itemStyle}>
				<View style={styles.wrapperStyle}>
					<Text style={styles.labelStyle}>Password</Text>
					<TextInput style={styles.inputStyle} 
								value={this.state.password} 
								onChangeText={password => this.setState({password})} 
								autoCorrect={false}
								placeholder="password"
								secureTextEntry={true}/>
				</View>
			</View>
			<Text style={styles.errorStyle}>{this.state.error}</Text>

			<View style={styles.itemStyle}>
				<Button handlePress={this.onButtonPress.bind(this)}>
					Sign Up / Login
				</Button>
			</View>

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

	},

	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'center'
	},

	picStyle: {
		height: 300,
		flex: 1, //Full width takes full width
		width: null
	},

	titleFontStyle: {
		fontSize: 25
	},

	inputStyle:{
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},

	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},

	wrapperStyle:{
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},

	errorStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'

	}
};

export default LoginForm;
