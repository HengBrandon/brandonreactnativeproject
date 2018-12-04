import React from 'react';
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSession from './CardSession'
import Button from './Button'

const AlbumDetail = (props) => {
    const { title, artist, thumbnail_image, image, url } = props.album
    return (
        <Card>
            <CardSession>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{uri: thumbnail_image}}/>
                </View>
                <View style={styles.headerContendtStyle}>
					<Text style={styles.headerTextStyle}>{artist}</Text>
                    <Text>{title}</Text>
                </View>
            </CardSession>
            <CardSession>
				<Image
					style={styles.imageStyle}
					source={{uri: image}}/>
            </CardSession>
			<CardSession>
                <Button onPress={ () => Linking.openURL(url)  }>
                    Buy Now
                </Button>
            </CardSession>
        </Card>
    )

}

const styles = {
    headerContendtStyle: {
       flexDirection: 'column',
       justifyContent: 'space-around',
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height:50,
        width: 50
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail