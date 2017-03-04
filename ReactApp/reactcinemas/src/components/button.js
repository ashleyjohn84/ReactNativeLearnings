import React from 'react';
import { Text , TouchableOpacity} from 'react-native';

const Button = (props) => {
	return(
			<TouchableOpacity style = {styles.buttonStyle} onPress={props.handlePress}>
				<Text style={styles.textStyle}>{props.buttonText}</Text>
			</TouchableOpacity>
		);
};

const styles = {

	textStyle:{
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle:{
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fdf',
		borderRadius: 5,
		borderWidth: 1,
		marginLeft: 5,
		marginRight:5
	}

}

export default Button;