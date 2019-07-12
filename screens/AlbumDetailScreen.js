import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import * as actions from '../actions'
import { Avatar, Text, Icon, Divider, ListItem } from 'react-native-elements';


export default class AlbumDetailScreen extends Component {
    static navigationOptions ={
        title: 'Album Detail'
    }
  state={
      tracks:[]
  }

  componentDidMount() {
    const album = this.props.navigation.getParam('album', {});
    

    actions.getAlbumTracks(album.id).then(
      tracks => this.setState({tracks}))
    .catch(error => console.error(error))

  }

  renderTracks () {
      const {tracks} = this.state;

      if(tracks && tracks.length > 0) {
          return tracks.map((track, index)=> {
              return (
                  <ListItem key={index}
                            title={track.title}
                            leftIcon={{name: 'play-arrow'}}
                            onPress={()=> {}}
                            rightIcon={
                                <Icon raised
                                name='star'
                                type='font-awesome'
                                color='#f50'
                                onPress={()=> {}}
                                />
                            }/>
              )
          })
      }
  }

  render() {
      const album = this.props.navigation.getParam('album', {});
      const artist= this.props.navigation.getParam('artist', '');
    if(album.id) {
      return (
      <ScrollView><View>
        <Avatar
        size="xlarge"
        rounded
        source={{uri:album.cover_medium}}></Avatar>
        <View>
            <Text h4>{album.title}</Text>
            <Text h4>{artist}</Text>
        
        <Icon raised 
            name="play"
            type="font-awesome"
            color="#f50"
            size={30}
            onPress={()=> {}}
            />
        </View>
        </View>
        <Divider style={{backgroundColor:'black'}}/>
        {this.renderTracks()}
      </ScrollView>
    );
      }
      else{
          <View>
              <Text> Loading... </Text>
          </View>
      }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 20
    },
     avatar: {
      flex: 1,
      marginRight: 10
    },
    headerRight: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      flexDirection: 'column'
    },
    mainText: {
      fontWeight: 'bold',
      color: '#3a3a3a',
      fontSize: 17
    },
    subText: {
      color: '#3a3a3a',
      fontSize: 17
    }
  });
