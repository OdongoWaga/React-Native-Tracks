import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'

export default class FavoriteScreen extends Component {
    static navigationOptions ={
        title: 'Favorite Albums'
    }

    render() {
        return (
            <ScrollView>
                <Text> textInComponent </Text>
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
