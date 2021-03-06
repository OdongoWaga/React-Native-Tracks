import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Linking,
  View,
} from 'react-native';
import { List, ListItem, Text, Icon, Card } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

const menuList = [
  {
    title: 'Search Albums',
    subtitle: 'Find your favorite music',
    icon: 'music',
    navigateTo: 'Albums'
  },
  {
    title: 'Music Collection',
    subtitle: 'Access your favorite albums',
    icon: 'heart',
    navigateTo: 'Favorite'
  },
  {
    title: 'Settings',
    subtitle: 'Customize your app',
    icon: 'cog',
    navigateTo: '#'
  }
]

export default class HomeScreen extends React.Component {
  render () {
  return (
    <ScrollView style={styles.container}>
     <View style={{backgroundColor: '#eaeaea', marginTop: 0}}>
  {
    menuList.map((item, index) => (
              <Card key={index}
                      title={item.title}>
                  <View style={styles.cardView}>
                    <Text style={{marginBottom: 10}}> {item.subtitle} </Text>
                    <Icon
                      raised
                      name={item.icon}
                      type='font-awesome'
                      color='#f50'
                      size={30}
                      onPress={() => {this.props.navigation.navigate(item.navigateTo)}}/>
                  </View>
                </Card>
    ))
  }
</View>
    </ScrollView>


        
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
