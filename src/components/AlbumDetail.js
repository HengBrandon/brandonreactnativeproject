import React from 'react';
import {Text, Image} from 'react-native'
import Card from './Card'
import CardSession from './CardSession'

const AlbumDetail = (props) => {

    return (
        <Card>
            <CardSession>
                <Text>{props.album.title}</Text>
            </CardSession>
        </Card>
    )

}

export default AlbumDetail