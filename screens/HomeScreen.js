import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';
import { List, ListItem, Text, Icon, Card } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  render () {
  return (
    <View style= {styles.container} >
      <Button title='Navigate to Albums' onPress={()=> this.props.navigation.navigate('Albums')} />
    </View>


        
  );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardView: {
    alignItems: 'center'
  }
});
