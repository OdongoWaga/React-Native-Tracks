import React, { Component } from 'react';
import { View} from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class CardList extends Component {
    renderAlbums() {
        const {data}= this.props;
        return data.map((album, index)=> {
          return (
            <Card
            title={album.title}
            image={{uri: album.image}}>
                
                <Button
           icon={<Icon name='code' color='#ffffff' />}
           backgroundColor='#03A9F4'
           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
           title='VIEW NOW' />
            </Card>
    
          )
      })
    }

  render() {
    return this.renderAlbums()
  }
}

export default CardList;
