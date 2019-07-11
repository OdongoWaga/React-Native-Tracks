import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardList from '../components/CardList';


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

  


  render(){
    const {albums} = this.state;
    
  return (
    <ScrollView style={styles.container}>
      
    <CardList data={albums} imageKey={'image'} titleKey={'title'}
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
