import React, { Component } from 'react'
import { View, StyleSheet,ScrollView } from 'react-native'
import { Card, Button, Text, List, ListItem, Icon } from 'react-native-elements';

import * as actions from '../actions';
import _ from 'lodash';

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
