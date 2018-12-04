import React, {Component} from 'react'
import {View} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component{

    state = { albums: [], other: 'hello'};

    componentDidMount(){
        this.getByfetch()
        // this.getByAxio()
    }

    getByfetch(){
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ albums: responseJson, other: 'madam' })
			})
			.catch((error) => {
				console.error(error);
			});
    }

    getByAxio(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => {
			    this.setState({ albums: response.data, other: 'madam' })});
    }

    renderAlbums(){
        return this.state.albums.map( album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render(){
        console.log(this.state.other);
        console.log(this.state.albums);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList