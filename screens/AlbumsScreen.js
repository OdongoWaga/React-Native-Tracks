import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AlbumsScreen extends React.Component {
  state= {
    albums: [
      {
        title: 'Meteora',
        image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
      },
      {
        title: 'Meteora',
        image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
      },
      {
        title: 'Meteora',
        image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
      },
      {
        title: 'Meteora',
        image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
      },
    ]

  }

  renderAlbums() {
    const {albums}= this.state;
    return albums.map((album, index)=> {
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


  render(){
    
  return (
    <ScrollView style={styles.container}>
      
    {this.renderAlbums()}

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
