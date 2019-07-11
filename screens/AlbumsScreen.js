import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import {Card, Text, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import CardList from '../components/CardList';
import * as actions from '../actions';
import SearchText from '../components/SearchText';


export default class AlbumsScreen extends React.Component {
  state= {
    albums: []
  };

  searchTracks=(artist) => {
  actions.searchTracks(artist).then(albums => this.setState({albums}));
  }
  

  


  render(){
    const {albums} = this.state;
    
  return (
    <ScrollView style={styles.container}>   
    <SearchText submitSearch={(artist)=> {this.searchTracks(artist)}}> </SearchText>  
    <CardList data={albums} imageKey={'cover_big'} titleKey={'title'}
    buttonText="See the detail">
    </CardList>
    </ScrollView>
  );
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
