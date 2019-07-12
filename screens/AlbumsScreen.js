import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import CardList from '../components/CardList';
import * as actions from '../actions';
import SearchText from '../components/SearchText';


export default class AlbumsScreen extends React.Component {
  state= {
    albums: [],
    isFetching: false
  };

  searchTracks=(artist) => {
  this.setState({isFetching: true, albums:[]})
  actions.searchTracks(artist).then(albums => this.setState({albums, isFetching:false}))
  .catch(err => this.setState({albums:[], isFetching:false}));
  }

  renderAlbumView() {
    const {albums, isFetching} = this.state;
    return (
      <ScrollView style={styles.container}>   
      <SearchText submitSearch={(artist)=> {this.searchTracks(artist)}}> </SearchText>  
      {albums.length >0 && !isFetching &&
      <CardList data={albums} imageKey={'cover_big'} titleKey={'title'}
      buttonText="See the detail">
      </CardList>
      }
      {albums.length === 0 && isFetching &&
      <Text> Loading Albums... </Text>

      }
      </ScrollView>
    )

  }
  

  


  render(){

    
  return this.renderAlbumView();
}
}

AlbumsScreen.navigationOptions = {
  title: 'Albums',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
