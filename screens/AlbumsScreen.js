import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AlbumsScreen extends React.Component {
  state= {
    cardName: 'Some Album',

  }

  cardNumber = 0;

  changeCardName =()=> {
    this.setState({
      cardName: `I am a new CardName ${this.cardNumber}`
    })
    this.cardNumber++
  }

  render(){
    const {cardName}= this.state;
  return (
    <ScrollView style={styles.container}>
     <Card
     title={cardName}>
         <Text style={{marginBottom: 10}}>
             The idea with React Native Elements is to be great
         </Text>
         <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
     </Card>
     <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Change Card Name' 
    onPress={()=> {this.changeCardName()}}/>

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
