import React from 'react';
import {View, Text, Image,Linking} from 'react-native';
import Button from './button'


const MovieBox =  (props) => {

	return(
		<View style={styles.containerStyle}>
			<View style={styles.itemStyle}>
				<Image  source ={{uri:props.movie.pic}} style={styles.picStyle}/>
			</View>

			<View style={styles.itemStyle}>
				<View style={styles.headerContentStyle}>
					<Text style={styles.titleFontStyle}>{props.movie.title}</Text>
					<Text>{props.movie.desc}</Text>
				</View>
			</View>

			<View style={styles.itemStyle}>
				<Button buttonText={'Book Tickets'} handlePress={() => Linking.openURL(props.movie.bookingURL)}></Button>
			</View>
		</View>
		);
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
            flex: 1,
            width: null
        },

        titleFontStyle: {
            fontSize: 25
        }
};

export default MovieBox