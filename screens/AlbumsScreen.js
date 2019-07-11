import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AlbumsScreen() {
  return (
    <ScrollView style={styles.container}>
     <Card
     title='Hello World'>
         <Text style={{marginBottom: 10}}>
             The idea with React Native Elements is to be great
         </Text>
         <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
     </Card>

    </ScrollView>
  );
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
