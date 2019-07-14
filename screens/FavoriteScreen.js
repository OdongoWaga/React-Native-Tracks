import React, { Component } from 'react'
import { View, StyleSheet,ScrollView,Linking } from 'react-native'
import { Card, Button, Text, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as actions from '../actions';
import _ from 'lodash';

export default class FavoriteScreen extends Component {
    static navigationOptions ={
        title: 'Favorite Albums'
    }

    constructor() {
        super();
    
        this.state = {
          favoriteAlbums: undefined
        }
    
        this.getFavoriteAlbums();
      }

      async getFavoriteAlbums() {
        const favoriteAlbums = await actions.retrieveData('favoriteAlbums');
    
        if (favoriteAlbums) {
          this.setState({favoriteAlbums});
        }
      }
    
      async deleteAlbum(albumId) {
        const { favoriteAlbums } = this.state;
    
        delete favoriteAlbums[albumId];
    
        const success = await actions.storeData('favoriteAlbums', favoriteAlbums);
    
        if (success) {
          this.setState({favoriteAlbums});
        }
      }

      renderFavoriteTracks(tracks) {
        if (tracks) {
          return _.map(tracks, (track, id) => {
            return (
              <ListItem
                key={id}
                title={track.title}
                rightIcon={
                  <Icon
                    raised
                    name='play-circle'
                    size ={30}
                    color='#f50'
                    onPress={() => Linking.openURL(track.preview)}/>
                } 
                leftIcon={
                    <Icon
                      raised
                      name='music'
                      size={30}
                      color='#f50'
                      />
                  }/>
            )
          })
        }
      }

      renderFavoriteAlbums() {
        const { favoriteAlbums } = this.state;
    
        if (favoriteAlbums) {
          return _.map(favoriteAlbums, (album, id) => {
            return (
              <View key={id}>
                <Card
                  title={album.title}>
                    <Button
                      title='Delete Album'
                      raised
                      backgroundColor='#f50'
                      icon={
                        <Icon
                          name="trash"
                          size={15}
                          color="white"
                        />
                      }
                      onPress={() => this.deleteAlbum(album.id)}
                  />
                  <View>
                  { this.renderFavoriteTracks(album.tracks)}
                  </View>
                </Card>
              </View>
            )
          })
        }
      }

    render() {
        return (
            <ScrollView>
                <View containerStyle={styles.listContainer}>
                {this.renderFavoriteAlbums()}
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
    listContainer: {
      backgroundColor: '#eaeaea'
    }
  
  });
