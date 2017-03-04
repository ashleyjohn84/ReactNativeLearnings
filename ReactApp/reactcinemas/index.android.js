import React,{ Component }  from 'react';
import {AppRegistry, View, Text} from 'react-native';
import Header from './src/components/header'
import MovieList from './src/components/movie-list'

export default class reactcinemas extends Component {
	render(){
		return (
			<View style={{flex:1}}>
				<Header headerTitle='React Cinemas'/>
				<MovieList/>
			</View>
		);
	}
	
}

AppRegistry.registerComponent('reactcinemas', () => reactcinemas);