import React from 'react';
import {View, Text,ScrollView} from 'react-native';
//import fetch from 'isomorphic-fetch';
import MovieBox from './movie-box';
import Header from './header';


export default class MovieList extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			movies:[
    {
	"key": 1,
	"title": "Singam 3", 
	"desc":"S3 is a sequel to the 2013 blockbuster - Singam II starring Suriya.",
	"pic":"https://i.ytimg.com/vi/bpK6MQB5r_g/maxresdefault.jpg",
	"bookingURL":"https://in.bookmyshow.com/buytickets/si-iii-tamil-chennai/movie-chen-ET00038429-MT/20170223"},
{
"key": 2,
"title": "Bogan", 
"desc":"Presenting the intriguing film starring Jayam Ravi, Arvind Swami and Hansika Motwani,", 
"pic":"https://i.ytimg.com/vi/zNOC2Ebgky4/hqdefault.jpg",
"bookingURL":"https://in.bookmyshow.com/buytickets/bogan-chennai/movie-chen-ET00042761-MT/20170223"},

{
"key": 3, 
"title":  "Guardians The Superheroes", 
"desc": "The Guardians a group of superheroes created in the secret labs during the Cold War gather to save the world from the villainous maniac August Kuratov and prevent nuclear disaster.",
"pic":"https://i.ytimg.com/vi/qPpN8c5CpF0/hqdefault.jpg",
"bookingURL":"https://in.bookmyshow.com/buytickets/guardians-mumbai/movie-mumbai-ET00052916-MT/20170224"}
  ]
		}

		this.renderMovieBox = this.renderMovieBox.bind(this);
	}

	componentWillMount(){
		
		fetch ('http://172.23.215.254:3000/movies')
			.then((response) => response.json())
			.then((responseData) => this.setState({movies:responseData}))
			.catch((error) => {});

	

	}


	renderMovieBox(){
		return this.state.movies.map((movie) => <MovieBox key={movie.key} movie={movie}/>);

	}

	render(){
		return (
		
			<ScrollView>
				{this.renderMovieBox()}
			</ScrollView>
		
		);
	}
}

